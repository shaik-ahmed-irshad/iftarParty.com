import mongoose from "mongoose";

const orderDetailsSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
});

const orderDetailsModel = mongoose.model(
  "OrderDetails",
  orderDetailsSchema,
  "iftarPartyOrders"
);

export default orderDetailsModel;
