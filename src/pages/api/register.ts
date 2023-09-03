/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable consistent-return */
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import { MongoClient } from 'mongodb';

export default async function registerUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();
  let userPassword;
  const { email, password, image, name } = req.body as {
    email: string;
    password: string;
    image?: string;
    name: string;
  };
  if (password === undefined || password === null) {
    userPassword = '';
  } else {
    userPassword = await bcrypt.hash(password, 10);
  }

  if (userPassword !== '') {
    // Check if the user already exists
    const existingUser = await db.collection('users').findOne({ email });
    if (existingUser) {
      client.close();
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user document
    const newUser = { email, password: userPassword, image } as {
      email: string;
      password: string;
      image?: string;
    };
    await db.collection('users').insertOne(newUser);
    client.close();
    return res.status(201).json({ message: 'User registered successfully' });
  }
}
