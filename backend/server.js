import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import productsRoutes from "./routes/product.route.js";
import authRoutes from "./routes/auth.route.js"

const app = express();
const PORT = 5400;

app.use(cors());

app.use(express.json());

dotenv.config();

// Routes
app.use('/api/products', productsRoutes);
app.use('/api/auth', authRoutes);



app.get("/", (req, res) => {
    res.send("Welcome , server is live");
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:5400`);
});