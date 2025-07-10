import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
    title : {
        type: String,
    },
    isCompleted: {
        type: String,
    },
    }, 
    {timestamps: true}
);

const todoModel = mongoose.model("todos", todoSchema);

export default todoModel;