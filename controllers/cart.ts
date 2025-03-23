import { CartRepository } from "../repository/cartRepository.js";
import { Request, Response } from "express";
import { CartFilter } from "../types/filters/CartFilter.js";
import { CartServices } from "../services/cartServices.js";

const cartRepository = new CartRepository();

const cartController = {
  getCart: async (req: Request, res: Response)  => {
    try {

      const userId = req.user?._id;
      if (userId === undefined) {
        return res.status(401).json({ message: "user_not_found" });
      } 

      const filter: CartFilter = req.query as CartFilter;
      filter.user = userId;
      console.log(filter);
      const cart = await cartRepository.findCartByMember(filter);
      return res.status(200).json(cart);
    } catch (error) {

      return res.status(500).json(error);
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      const orders = req.body;
      if (req.user?._id === undefined) {
        return res.status(401).json({ message: "user_not_found" });
      }
      const userId: string = req.user?._id;

      const result = await CartServices.create(orders, userId);
      if (!result.success) {
        return res.status(500).json(result.message);
      }

      return res.status(201).json({ message: "cart_created" });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

export default cartController;
