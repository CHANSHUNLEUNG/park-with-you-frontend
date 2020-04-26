import axios from 'axios'
class BookingApi {
  static bookParkingLot(parkingLotId, customerId, startTime, durationHours) {
    return axios.post(`/parking-lots/${parkingLotId}/booking`, { 
      customerId,
      startTime: startTime.format("YYYY-MM-DD HH:mm:ss"),
      duration: durationHours * 60 * 60
    });
  }
}

export default BookingApi;
