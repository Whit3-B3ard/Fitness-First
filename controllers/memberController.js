import Member from '../models/MemberModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

const secret = crypto.randomBytes(64).toString('hex');
//console.log( "Secret Key: ", secret);

// REGISTER Member*********************************************** */
export const registerMember = async (req, res) => {
  try {
    const { name, email, password, confirmPassword  } = req.body;

    if (!password || !confirmPassword || password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match or are missing' });
      }

    const existingMember = await Member.findOne({ email });
    if (existingMember) {
      return res.status(400).json({ message: 'Member already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    console.log("🚀 ~ registerMember ~ hashedPassword:", hashedPassword)

    const member = new Member({
      name,
      email,
      password: hashedPassword
    });

    await member.save();

    const token = jwt.sign({ id: member._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

    res.status(201).json({ member: { name: member.name, email: member.email, id: member._id }, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong frontend' });
    console.log(error);
  }
};

// LOGIN Member *********************************************** */
export const loginMember = async (req, res) => {
  const { email, password, rememberMe  } = req.body;

  const member = await Member.findOne({ email });

  if (!member) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const isValidPassword = await bcrypt.compare(password, member.password);

  if (!isValidPassword) {
    return res.status(400).json({ message: "Wrong password" })
  }

  const expiresIn = rememberMe ? '30d' : '1d';

  const token = jwt.sign({ id: member._id }, process.env.JWT_SECRET, { expiresIn });

  res.status(200).send({ token, member });
}






