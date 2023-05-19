// Package
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Env
dotenv.config();
const port = process.env.PORT || 3000;

//Module
import { collectionRouter, imgRouter, chatRouter, userRouter } from './src/router/index.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', collectionRouter);
app.use('/api', imgRouter);
app.use('/api', chatRouter);
app.use('/api', userRouter);

// app.use('/api', userRouter);

app.get('/', (req, res) => {
  res.send('Hello openAI');
});

//DB
mongoose
  .connect('mongodb+srv://takelucky777:dksk21121234$a@cluster0.cg3wch9.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('connected to mongodb');
  })
  .catch((error) => {
    console.error(error);
  });

// Listen
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
