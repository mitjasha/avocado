import { get, post, put, del } from "./api";
import { Product, ProductResponse, ProductRequest } from "./api.interface";

const productsController = {
  addProduct: (product: Product) =>
    post<ProductResponse>("/product", JSON.stringify(product)),
  delProduct: (product: ProductRequest) => del(`/product/${product.id}`),
  getAllproduct: () => get<ProductResponse[]>("/product"),
  getProductById: (productID: string) =>
    get<ProductResponse>(`/product/${productID}`),
  updateProduct: (product: ProductRequest) =>
    put(`/product/${product.id}`, JSON.stringify(product)),
};

export default productsController;
