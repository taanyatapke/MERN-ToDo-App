import mongoose from "mongoose";

const connectToMongo = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/todo-mern-app");
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};

export default connectToMongo;
