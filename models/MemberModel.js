import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String },
  isAdmin: { type: Boolean, default: false },

},
{timestamps:true});

const Member = mongoose.model('Member', memberSchema);

export default Member;
