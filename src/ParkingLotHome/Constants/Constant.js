export const TEST_PARKING_LOT_LIST = [{ "id": 1, "name": "Times Square", "address": "1 Matheson Street, Causeway Bay, Hong Kong", "unitPrice": 45.0, "capacity": 10, "availableCount": 10, "region": "Wan Chai" }, { "id": 2, "name": "New Town Plaza", "address": "New Town Plaza, Sha Tin Centre Street, Sha Tin, Hong Kong", "unitPrice": 35.0, "capacity": 20, "availableCount": 20, "region": "Sha Tin" }, { "id": 3, "name": "Tai Po Mega Mall", "address": "Tai Po Mega Mall, No.8 & 10 On Pong Road, Tai Po, Hong Kong", "unitPrice": 30.0, "capacity": 15, "availableCount": 15, "region": "Tai Po" }, { "id": 4, "name": "Langham Place Shopping Mall", "address": "Langham Place Shopping Mall, Shantung Street, Mongkok, Hong Kong", "unitPrice": 35.0, "capacity": 10, "availableCount": 10, "region": "Yau Tsim Mong" }, { "id": 5, "name": "Stanley Plaza", "address": "Stanley Plaza, 23 Carmel Road, Stanley, Hong Kong", "unitPrice": 40.0, "capacity": 10, "availableCount": 10, "region": "Southern" }, { "id": 6, "name": "Shatin Park Stage 2 Car Park", "address": "3 Kong Pui St, Sha Tin, Hong Kong", "unitPrice": 35.0, "capacity": 10, "availableCount": 10, "region": "Sha Tin" }, { "id": 7, "name": "Lippo Sun Plaza carpark", "address": "1 Kowloon Park Dr, Tsim Sha Tsui, Hong Kong", "unitPrice": 25.0, "capacity": 20, "availableCount": 20, "region": "Yau Tsim Mong" }, { "id": 8, "name": "Ocean Terminal Car Park", "address": "Harbour City, Canton Rd, Tsim Sha Tsui", "unitPrice": 35.0, "capacity": 20, "availableCount": 20, "region": "Yau Tsim Mong" }, { "id": 9, "name": "HomeSquare Car Park", "address": "Sha Tin Government Offices, 1 Sheung Wo Che Rd, Sha Tin, Hong Kong", "unitPrice": 22.0, "capacity": 20, "availableCount": 20, "region": "Sha Tin" }, { "id": 10, "name": "Fortune City One Car Park", "address": "1 Ngan Shing St, Sha Tin, Hong Kong", "unitPrice": 18.0, "capacity": 10, "availableCount": 10, "region": "Sha Tin" }];
export const TEST_ORDER_LIST= [{"orderTime":"2020-04-26 17:51:25","orderId":36,"customerId":3,"parkingLotId":2,"parkingLotName":"New Town Plaza","address":"New Town Plaza, Sha Tin Centre Street, Sha Tin, Hong Kong","unitPrice":35.0,"parkingPlaceId":12,"parkingPlaceName":"P2","startParkingTime":"2020-04-28 07:45:00","duration":3600},{"orderTime":"2020-04-26 14:50:14","orderId":25,"customerId":3,"parkingLotId":1,"parkingLotName":"Times Square","address":"1 Matheson Street, Causeway Bay, Hong Kong","unitPrice":45.0,"parkingPlaceId":1,"parkingPlaceName":"P1","startParkingTime":"2020-04-27 07:15:00","duration":3600}];
export const BACKEND_HOST_URL = (process.env.NODE_ENV === "development") ? "http://hk3cvdv00648.oocl.com:9300" : 
( process.env.REACT_APP_API_HOST ? process.env.REACT_APP_API_HOST : "http://hk3cvdv00648.oocl.com:9300");
export const PARKING_LOT_INFO_PATH = "/parking-lots";
export const PARKING_ORDER_INFO_PATH = "/parking-orders";
export const CUSTOMER_INFO_PATH = "/customers";
export const SORT_BY_NAME = "name";
export const SORT_BY_DISTANCE = "distance";
export const SORT_BY_AVAILABLE = "available";
export const SORT_BY_PRICE = "price";
export const USER_NAME_INIT_STATE = "Register";
export const SEARCH_BY_REGION = "?region=";
export const UPDATE_USER_INFO = "/update";
export const COUPONS_PATH = '/coupons';
export const SHARE_LINK_PATHNAME = '/coupons';
export const SHARE_LINK_PARAMETER_NAME = 'coupon';

