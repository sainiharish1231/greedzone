import axios, { AxiosResponse, AxiosError } from "axios";

let authToken: string | null = null;

const API_URL = process.env.NEXT_PUBLIC_HOST_URL || "/user/login";

type ErrorResponse = {
  err?: string;
};

export const apiClient = axios.create({});
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    const data = response?.data;

    if (response.status === 200 && data?.data?.token) {
      authToken = data.data.token;
    } else if (response.status == 401) {
      console.log("This is the error,", data);
    }
    return data;
  },

  (error: AxiosError) => {
    if (error.response?.status === 401) {
      console.log("Not authorized");
    } else if (error.response?.status === 404) {
      console.log("Not found the resource");
    } else if (error.response?.status === 500) {
      console.log("Some server error occurred... don't know");
    } else if (error.response?.data) {
      const resp: ErrorResponse = error.response.data;
      if (resp.err) {
        console.log("ERROR: ", resp.err);
      }
    } else {
      console.log("Network error!");
    }
    return Promise.reject(error.response?.data || error.message);
  }
);

class ApiService {
  _baseUrl: string = "";
  constructor(baseUrl: string) {
    if (!baseUrl.startsWith("http")) {
      baseUrl = `${API_URL}${baseUrl}`;
    }
    this._baseUrl = baseUrl;
  }

  getUrl(path: string | undefined) {
    if (!path) return `${this._baseUrl}`;
    if (!path?.startsWith("http")) {
      return `${this._baseUrl}${path}`;
    }
    return path;
  }

  getHeaders() {
    return {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${authToken || ""}`,
    };
  }

  getData(path?: string, options?: any) {
    const headers = options?.headers || this.getHeaders();
    return apiClient.get(this.getUrl(path), { ...options, headers });
  }

  postData(path: string, data: any, options?: any) {
    const headers = options?.headers || this.getHeaders();
    return apiClient.post(this.getUrl(path), data, { ...options, headers });
  }

  putData(path: string, data: any, options?: any) {
    const headers = options?.headers || this.getHeaders();
    return apiClient.put(this.getUrl(path), data, { ...options, headers });
  }

  deleteData(path: string, options?: any) {
    const headers = options?.headers || this.getHeaders();
    return apiClient.delete(this.getUrl(path), { ...options, headers });
  }
}

export default ApiService;
