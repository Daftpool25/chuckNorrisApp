import ApiRequest from "../utils/config/axios.config"

export default function getData() {
    return ApiRequest.get("/",{
        validateStatus: function (status) {
          return status < 500; // Resuelve solo si el código de estado es menor que 500
        }
      });
}