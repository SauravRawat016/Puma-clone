const mongoose=require("mongoose");
const product_schema=new mongoose.Schema({
    id:String,
    name:String,
    price:Number,
    gender:String,
    image_url:String,
})
module.exports("Product_schema",product_schema);