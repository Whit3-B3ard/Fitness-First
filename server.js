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
app.use(cors());
app.use(express.json()); 


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
