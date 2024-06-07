import mongoose ,{Schema,model} from "mongoose";


const userSchema = new Schema({
    
},{timestamps:true})



const User = model('User',userSchema)