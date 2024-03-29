import api from "../index";

class ApiService {
  get(url,data={}) {
    return api.get(url, data)
  }
}

const service = new ApiService()
export default service