import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(
      `mongodb+srv://ai-72:caQo8GK45ek7cpXl@codeforindia.jyq6r2l.mongodb.net/iftarPartyOrders`
    );
    console.log("Olalaa: connected to mongoDB");
  } catch (error) {
    console.error(error);
  }
}

connectDB();
