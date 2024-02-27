import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import memberRoutes from './routes/memberRoutes.js';


dotenv.config();

const app = express();

// MIDDLEWARE****************** */
app.use(morgan('dev'));
app.use(cors("http://localhotst:5173"));
app.use(express.json()); 
app.use("/uploads", express.static("uploads")); // to serve the images in client side
// if the req containing this path("/uploads"), then express.static("uploads") must run 

// MONGODB  CONNECTION ************ */
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
    
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Could not connect to MongoDB', err);
  }
};

connectDB();

//  ROUTES ********************** */
app.use("/api/member", memberRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
