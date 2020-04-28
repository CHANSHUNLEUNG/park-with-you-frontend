import axios from 'axios'
import { BACKEND_HOST_URL, COUPONS_PATH } from "../Constants/Constant";
class CouponApi {
  static activateCoupon(coupon) {
    return axios.get(BACKEND_HOST_URL + `${COUPONS_PATH}?coupon=${coupon}`);
  }
}

export default CouponApi;
