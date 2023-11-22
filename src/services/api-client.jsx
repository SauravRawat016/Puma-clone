//It import URL from Util and make the network call.
//if network call is successful it return the data 
//else throws a function
import URL from '../utils/constants.jsx';
async function Networkcall(){
    try{
    const response=await fetch(URL);
    const object=response.json();
    return object;
    }
    catch(err){
        throw(err);
    }
}
export default Networkcall;
// const mongoose = require("mongoose");

// const URL="mongodb+srv://Saurav_Rawat:a1b2c3@cluster0.kwh07ci.mongodb.net/userdb?retryWrites=true&w=majority";

// mongoose.connect(URL,{
// }).then(()=>{
//     console.log("Connection successful");
// }).catch((err)=>{
//     console.log("Connection failed");
// })