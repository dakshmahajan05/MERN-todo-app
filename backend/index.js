import dotenv from 'dotenv'
dotenv.config();

import './db/conn.js'
import express from 'express'
const app = express();

import cors from 'cors'
app.use(cors())

import tesRroutes from './routes/test.routes.js'

import userRoutes from './routes/user.routes.js';

const PORT = process.env.PORT;

app.use(express.json());

app.use('/api/v1/',tesRroutes)

app.use('/api/v1/user',userRoutes)

app.listen(PORT || 3001,()=>{
    console.log(`listening on port ${PORT}`);
    
})
