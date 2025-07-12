import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import productsRoutes from "./routes/product.route.js";
import authRoutes from "./routes/auth.route.js"
import swaggerUiExpress from "swagger-ui-express";
import swaggerSpec from "./swagger/swagger.js";

// Load environment variables
dotenv.config();

const app = express();
const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:3000",
    "https://mern-stack-6ua1.onrender.com",
    "https://mern-tutorial.netlify.app"
  ];
  
  app.use(
    cors({
      origin: function (origin, callback) {
        // allow requests with no origin (like mobile apps or curl)
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
          return callback(null, true);
        } else {
          return callback(new Error("Not allowed by CORS"));
        }
      },
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true,
    })
  );
  
  app.use(express.json()); // allows us to accept JSON data in the req.body
  app.use(
    "/api-docs",
    swaggerUiExpress.serve,
    swaggerUiExpress.setup(swaggerSpec)
  );

// Routes
app.use('/api/products', productsRoutes);
app.use('/api/auth', authRoutes);



app.get("/", (req, res) => {
    res.send("Welcome , server is live");
});

const PORT = process.env.PORT || 5400

app.listen(PORT, () => {
    connectDB();
    console.log(`Server started at http://localhost:${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
  });