export const TEST_PARKING_LOT_LIST = [{ "id": 1, "name": "Times Square", "address": "1 Matheson Street, Causeway Bay, Hong Kong", "unitPrice": 45.0, "capacity": 10, "availableCount": 10, "region": "Wan Chai" }, { "id": 2, "name": "New Town Plaza", "address": "New Town Plaza, Sha Tin Centre Street, Sha Tin, Hong Kong", "unitPrice": 35.0, "capacity": 20, "availableCount": 20, "region": "Sha Tin" }, { "id": 3, "name": "Tai Po Mega Mall", "address": "Tai Po Mega Mall, No.8 & 10 On Pong Road, Tai Po, Hong Kong", "unitPrice": 30.0, "capacity": 15, "availableCount": 15, "region": "Tai Po" }, { "id": 4, "name": "Langham Place Shopping Mall", "address": "Langham Place Shopping Mall, Shantung Street, Mongkok, Hong Kong", "unitPrice": 35.0, "capacity": 10, "availableCount": 10, "region": "Yau Tsim Mong" }, { "id": 5, "name": "Stanley Plaza", "address": "Stanley Plaza, 23 Carmel Road, Stanley, Hong Kong", "unitPrice": 40.0, "capacity": 10, "availableCount": 10, "region": "Southern" }, { "id": 6, "name": "Shatin Park Stage 2 Car Park", "address": "3 Kong Pui St, Sha Tin, Hong Kong", "unitPrice": 35.0, "capacity": 10, "availableCount": 10, "region": "Sha Tin" }, { "id": 7, "name": "Lippo Sun Plaza carpark", "address": "1 Kowloon Park Dr, Tsim Sha Tsui, Hong Kong", "unitPrice": 25.0, "capacity": 20, "availableCount": 20, "region": "Yau Tsim Mong" }, { "id": 8, "name": "Ocean Terminal Car Park", "address": "Harbour City, Canton Rd, Tsim Sha Tsui", "unitPrice": 35.0, "capacity": 20, "availableCount": 20, "region": "Yau Tsim Mong" }, { "id": 9, "name": "HomeSquare Car Park", "address": "Sha Tin Government Offices, 1 Sheung Wo Che Rd, Sha Tin, Hong Kong", "unitPrice": 22.0, "capacity": 20, "availableCount": 20, "region": "Sha Tin" }, { "id": 10, "name": "Fortune City One Car Park", "address": "1 Ngan Shing St, Sha Tin, Hong Kong", "unitPrice": 18.0, "capacity": 10, "availableCount": 10, "region": "Sha Tin" }];
export const TEST_ORDER_LIST= [
    {
        "parkingLotName": "Times Square",
        "parkingLotAddress": "1 Matheson Street, Causeway Bay, Hong Kong",
        "unitPrice": "45.0",
        "timeStamp": "2020-04-27 02:33:26.155",
        "orderId": 40,
        "customerId": 2,
        "parkingLotId": 2,
        "parkingPlaceId": 20,
        "parkingPlaceName": "P10",
        "startTime": "2020-04-27 23:45:00",
        "duration": 3600
    },
    {
        "parkingLotName": "New Town Plaza",
        "parkingLotAddress": "New Town Plaza, Sha Tin Centre Street, Sha Tin, Hong Kong",
        "unitPrice": "30.0",
        "timeStamp": "2020-04-27 05:33:26.155",
        "orderId": 50,
        "customerId": 2,
        "parkingLotId": 3,
        "parkingPlaceId": 40,
        "parkingPlaceName": "P12",
        "startTime": "2020-04-28 23:45:00",
        "duration": 7200
    }
]
export const BACKEND_HOST_URL = "http://hk3cvdv00648.oocl.com:9300";
export const PARKING_LOT_INFO_PATH = "/parking-lots";
export const CUSTOMER_INFO_PATH = "/customers";
export const SORT_BY_NAME = "name";
export const SORT_BY_DISTANCE = "distance";
export const SORT_BY_AVAILABLE = "available";
export const SORT_BY_PRICE = "price";
export const USER_NAME_INIT_STATE = "Register";