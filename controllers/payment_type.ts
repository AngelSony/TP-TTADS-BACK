import { PaymentType } from "../models/database/payment_type.js";
import { validatePaymentType } from "../schemas/payment_type.js";
import { Request, Response } from "express";
import { PaymentTypeRepository } from "../repository/payment_type_repository.js";

const paymentTypeRepository = new PaymentTypeRepository();

const paymenttypeController = {
  getAllPaymentTypes: async (req: Request, res: Response) => {
    try {
      const paymentTypes = await paymentTypeRepository.findAll();
      res.status(200).json(paymentTypes);
    } catch (error) {
      res.status(500).json({ error: "Error getting Payment Types" });
    }
  },

  getPaymentTypeById: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const paymentType = await paymentTypeRepository.findOne({ id });
      if (!paymentType) {
        res.status(404).json({ error: "Payment Type not found" });
      }
      res.status(200).json(paymentType);
    } catch (error) {
      res.status(500).json({ error: "internal_server_error" });
    }
  },

  createPaymentType: async (req: Request, res: Response) => {
    try {
      const result = validatePaymentType(req.body);
      if (!result.success) {
        // 400 Bad Request
        console.log(result.error.message);
        return res
          .status(400)
          .json({ error: JSON.parse(result.error.message) });
      }

      //VER SI LO DEJO O DIRECTO CON req.body
      const newPaymentType = new PaymentType(req.body);

      const savedPaymentType = await paymentTypeRepository.add(newPaymentType);
      //const savedPaymentType = await newPaymentType.save()
      res
        .status(201)
        .json({ message: "Payment Type created", data: savedPaymentType });
    } catch (error) {
      res.status(500).json({ error: "internal_server_error" });
    }
  },

  updatePaymentTypeById: async (req: Request, res: Response) => {
    try {
      const updatedPaymentType = await paymentTypeRepository.update(
        req.params.id,
        req.body,
      );
      if (!updatedPaymentType) {
        return res.status(404).json({ error: "payment_type_not_found" });
      }
      res.status(200).json(updatedPaymentType);
    } catch (error) {
      res.status(500).json({ error: "internal_server_error" });
    }
  },

  deletePaymentTypeById: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).json({ error: "id_is_requiered" });
      }
      const paymentTypeDeleted = await paymentTypeRepository.delete({ id });
      if (!paymentTypeDeleted) {
        return res.status(404).json({ error: "Payment Type not found" });
      }
      res.status(200).json({ message: "payment_type_deleted", data: paymentTypeDeleted });
    } catch (error) {
      res.status(500).json({ error: "internal_server_error" });
    }
  },
};

export default paymenttypeController;
