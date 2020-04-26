import axios from 'axios'
import { BACKEND_HOST_URL, PARKING_LOT_INFO_PATH } from "../Constants/Constant";
class BookingApi {
  static bookParkingLot(parkingLotId, customerId, startTime, durationHours) {
    return axios.post(BACKEND_HOST_URL + `${PARKING_LOT_INFO_PATH}/${parkingLotId}/booking`, { 
      customerId,
      startTime: startTime.format("YYYY-MM-DD HH:mm:ss"),
      duration: durationHours * 60 * 60
    });
  }
}

export default BookingApi;
