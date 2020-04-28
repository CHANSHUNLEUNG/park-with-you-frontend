import axios from 'axios'
import { BACKEND_HOST_URL, PARKING_LOT_INFO_PATH, PARKING_ORDER_INFO_PATH } from "../Constants/Constant";
class BookingApi {
  static bookParkingLot(parkingLotId, customerId, startTime, durationHours, couponId) {
    return axios.post(BACKEND_HOST_URL + `${PARKING_LOT_INFO_PATH}/${parkingLotId}/booking`, { 
      customerId,
      startTime: startTime.utc().format("YYYY-MM-DD HH:mm:ss"),
      duration: durationHours * 60 * 60,
      couponId
    });
  }

  static extendBooking(orderId, duration) {
    return axios.post(
      BACKEND_HOST_URL + `${PARKING_ORDER_INFO_PATH}/${orderId}`,
      { duration: duration * 60 * 60 }
    );
  }

  static getAllOrders(userId) {
    return axios.get(BACKEND_HOST_URL + `${PARKING_ORDER_INFO_PATH}/customers/${userId}`)
  }
}

export default BookingApi;
