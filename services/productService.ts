import { ProductRepository } from "../repository/productRepository.js";
import { UserRepository } from "../repository/userRepository.js";

const userRepository = new UserRepository();
const productRepository = new ProductRepository();

type ServiceResult<T> = {
  success: boolean;
  data?: T;
  message?: string;
};

export const ProductService = {
  create: async (params: IProduct): Promise<ServiceResult<IProduct | void>> => {
    /* create a product
     * @param {seller_id} - seller that owns the product
     * @param {name} name - name of the product
     * @param {description}
     * @param {price}
     * @param {stock}
     * @param {img}
     */

    try {
      const addedProduct = await productRepository.add(params);
      return {
        success: true,
        data: addedProduct,
      };
    } catch (error) {
      return {
        success: false,
        message: "Failed to add product",
      };
    }
  },
};


