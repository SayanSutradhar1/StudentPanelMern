import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    pic:String,
    name: String,
    rollNumber: String,
    department: String,
    year: String,
    resume : String,
    address: String,
    contact: String,
    email: String,
})

export const Student = mongoose.model("Students",studentSchema)