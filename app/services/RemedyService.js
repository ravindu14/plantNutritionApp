import type { ApiServiceInterface } from "@app/helpers/services/ApiServiceInterface";
import axios from "axios";

class RemedyService {
  api: ApiServiceInterface;

  endpoint: string = "/research";

  constructor(apiService: ApiServiceInterface) {
    this.api = apiService;
  }

  getRemedyType(payload: Object = {}) {
    return axios.post(
      "http://3.22.181.8/eff-healthy-leaf/img-process",
      payload
    );
  }

  getRemedyDetails(payload: Object = {}) {
    return axios.post("http://3.22.181.8/healthy-leaf/img-process", payload);
  }

  getResearchDetails(query: Object = {}) {
    return this.api.get(`${this.endpoint}/get-research`, query);
  }
}

export default RemedyService;
