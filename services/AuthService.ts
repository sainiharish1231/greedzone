import ApiService from "./ApiService";

class AuthService extends ApiService {
  constructor(baseUrl = "/user") {
    super(baseUrl);
  }
  login(data: any, options?: any) {
    return this.postData("/login", data, options);
  }
  register(data: any, options?: any) {
    return this.postData("/register", data, options);
  }
}
export default new AuthService();
