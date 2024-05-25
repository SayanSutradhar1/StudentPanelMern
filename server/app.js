import express from 'express'
import dotenv from 'dotenv'
import connectDB from './utils/db.js'
import { Student } from './models/student.js'

dotenv.config({
    path:'../.env',
})


const port = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.get('/api/data',async(req,res)=>{
    res.status(200).send(await Student.find({}))
})

app.post('/api/data',async(req,res)=>{
    console.log(req.body);
    await Student.create(req.body)
})

app.delete('/api/data/:itemId',async(req,res)=>{
    try{
        const {itemId} = req.params
        await Student.findByIdAndDelete(itemId)
        res.status(200).send("Deleted Sucessfully")
        console.log("Item deleted")
    }catch(err){
        res.status(500).send("Server error")
    }
})

connectDB().then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running at port ${port}`);
    })
}).catch((err)=>{
    console.log(err);
})





