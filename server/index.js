import express from "express";
import cors from "cors";
import connectToMongo from "./config/db.js";
import todoRoutes from "./routes/todoRoutes.js";
const app = express();

const PORT = 9000;

connectToMongo();

app.use(cors());

app.use(express.json());

app.get("/",(req,res) => {
    res.send("API is Running");
});

app.use("/api/v1",todoRoutes);

app.listen(PORT, () => {
    console.log(`API is Running on http://localhost:${PORT}`);
});
