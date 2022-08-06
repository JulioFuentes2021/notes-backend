import express from 'express';
import mongoose from 'mongoose';
import { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req:Request, res:Response) => {
    res.send('Express + TypeScript Server');
});

const options: object = {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
};

mongoose.connect(process.env.DB_CONNECTION as string, options)
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err:string) => {
        console.log('Error connecting to database ' + err);
    });

app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});