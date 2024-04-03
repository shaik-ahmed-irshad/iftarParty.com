import express from "express";
import orderDetailsModel from "./models/OrderDetailsSchema.js";
import cors from "cors";
import "./dbConnect.js";
const app = express();
const Port = 5000;

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("<h1>hello</h1>");
});

app.get("/orders", async (req, res) => {
  try {
    const orders = await orderDetailsModel.find({}).sort({date:1});
    console.log(orders);
    res.status(200).json(orders);
  } catch (error) {
    console.error(error.response.data);
  }
});

app.post("/orders", async (req, res) => {
  try {
    const orderData = new orderDetailsModel(req.body);
    await orderData.save();
    res.status(200).json({ success: "order placed successfully" });
  } catch (error) {
    console.error(error);
  }
});

app.listen(Port, () => {
  console.log(`Server running on port ${Port}`);
});
