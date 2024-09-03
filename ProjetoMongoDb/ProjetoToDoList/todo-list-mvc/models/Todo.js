import mongoose from "mongoose";

const TodoSchema =  new mongoose.Schema({
   title:  {
    type:String,
    required: true,
   } ,
   completed: {
    type: Boolean,
    default: false,
   },   
});

//Busca no model o arquivo Todo ou ele busca para TodoSchema
export default mongoose.models.Todo || mongoose.model('Todo', TodoSchema); 