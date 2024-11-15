import ApiService from "./ApiService";

class NewsService extends ApiService {
  constructor() {
    super("/news");
  }

  getBreakingNews() {
    return this.getData("?type=breaking");
  }
  getTopNews() {
    return this.getData("?type=top");
  }
  search(query: string) {
    return this.getData(`/search?query=${query}`);
  }
  getNews(pageNo: Number) {
    return this.getData(`?pageNo=${pageNo}`);
  }
  getNewsByCategory(categoryId: string) {
    return this.getData(`?categoryId=${categoryId}`);
  }
}

export default new NewsService();
