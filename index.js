import dotenv from 'dotenv'
dotenv.config();

import './db/conn.js'
import express from 'express'
const app = express();

import cors from 'cors'
app.use(cors())

import routes from './routes/test.routes.js'

const PORT = process.env.PORT;

app.use(express.json());

app.use('/api/v1/',routes)

app.listen(PORT || 3001,()=>{
    console.log(`listening on port ${PORT}`);
    
})
