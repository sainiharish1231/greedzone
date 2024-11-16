import ApiService from "./ApiService";

class FeedbackService extends ApiService {
  constructor() {
    super("/feedback");
  }
}

export default new FeedbackService();
