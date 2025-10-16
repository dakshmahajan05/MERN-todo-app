import dotenv from 'dotenv'
dotenv.config();

import './db/conn.js'

import express from 'express'
const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.get('/',(req,res)=>{
res.send("heyy")
})

app.listen(PORT || 3001,()=>{
    console.log(`listening on port ${PORT}`);
    
})
