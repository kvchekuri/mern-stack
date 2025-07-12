import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/product.model.js';
import { connectDB } from './config/db.js';

dotenv.config();

const dummyProducts = [
  {
    title: 'Scanner Ext',
    image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d',
    description: 'This study examines the impact of independent director-affiliated donations on firm valuation in...',
    price: 129,
  },
  {
    title: 'Blueband Ext',
    image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d',
    description: 'This study examines the impact of independent director-affiliated donations on firm valuation in...',
    price: 129,
  },
];

const seedProducts = async () => {
  try {
    await connectDB();
    await Product.deleteMany();
    await Product.insertMany(dummyProducts);
    console.log('Dummy products seeded!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedProducts(); 