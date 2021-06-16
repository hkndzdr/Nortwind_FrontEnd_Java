import axios from "axios";

export default class ProductService {
  getProducts() {
    return axios.get("http://localhost:8080/api/products/getall");
  }

  getByProductId(productId) {
    return axios.get("http://localhost:8080/api/products/getById?id="+ productId);
  }

  getByProductName(productName) {
    return axios.get("http://localhost:8080/api/products/getByProductName?productName="+ productName);
  }

}
