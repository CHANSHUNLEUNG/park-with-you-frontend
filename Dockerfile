# Stage 1 - production build
FROM node as build-deps
ARG REACT_APP_API_HOST
ENV REACT_APP_API_HOST=$REACT_APP_API_HOST
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run-script build

# Stage 2 - the production environment
FROM nginx
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]