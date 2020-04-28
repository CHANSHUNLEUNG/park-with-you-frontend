import axios from 'axios'
import { BACKEND_HOST_URL, COUPONS_PATH, GET_SHARE_LINK_PATH } from "../Constants/Constant";
class CouponApi {
  static activateCoupon(coupon) {
    return axios.get(BACKEND_HOST_URL + `${COUPONS_PATH}?coupon=${coupon}`);
  }

  static getShareLink(customerId, orderId) {
    return axios.get(BACKEND_HOST_URL + GET_SHARE_LINK_PATH, {
      params: { customerId, orderId },
    });
  }
}

export default CouponApi;
