import express from 'express';
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/product.controller.js';
import authMiddleware from '../../middleware/auth.middleware.js';

const router = express.Router();

router.get('/', authMiddleware, getAllProducts);

router.get('/:id', authMiddleware, getProductById);

router.post('/', authMiddleware, createProduct);

router.put('/:id', authMiddleware, updateProduct);

router.delete('/:id', authMiddleware, deleteProduct);

export default router; 