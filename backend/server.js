import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
const PORT = 5400; 

app.use(cors());

app.use(express.json());

let products = [];
let currentId = 1;

// CREATE
app.post("/api/products", (req, res) => {
    const product = { id: currentId++, ...req.body };
    products.push(product);
    res.status(201).json(product);
  });

// READ all
app.get("/api/products", (req, res) => {
    res.json(products);
  });

  // READ one
  app.get("/api/products/:id", (req, res) => {
    const product = products.find(p => p.id == req.params.id);
    if (product) res.json(product);
    else res.status(404).json({ message: "Product not found" });
  });
  
  // UPDATE
  app.put("/api/products/:id", (req, res) => {
    const index = products.findIndex(p => p.id == req.params.id);
    if (index !== -1) {
      products[index] = { ...products[index], ...req.body };
      res.json(products[index]);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  });

// DELETE
app.delete("/api/products/:id", (req, res) => {
    const index = products.findIndex(p => p.id == req.params.id);
    if (index !== -1) {
      products.splice(index, 1);
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  });


app.get("/", (req, res) => {
    res.send("Welcome , server is live");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:5400`);
});