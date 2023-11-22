//it import data from api-client and convert it into the required form .
//return the product array containing all the products .
import Networkcall from "./api-client";
import Product from "../model/product";
import URL from "../utils/constants";







// const { MongoClient } = require('mongodb');

// export default async function ProductOperations() {
//   const dbName = 'userdb';
//   const collectionName = 'products';

//   const client = new MongoClient(URL);
//   try {
//     await client.connect();
//     console.log('Connected to the database');

//     const db = client.db(dbName);
//     const collection = db.collection(collectionName);

//     // Fetch data and store it in an array
//     const dataArray = await collection.find({}).toArray();

//     return dataArray;
//   } catch (err) {
//     console.error('Error fetching data:', err);
//   } finally {
//     await client.close();
//     console.log('Connection closed');
//   }
// }

// Example usage



const ProductOperations={
    
async loadproduct(){
    const data=await Networkcall();
    const products=data['products'];
    const productArray=products.map(prod=>{
        const curr_prod=new Product(prod.id, prod.name,prod.price, prod.image_url,prod.gender);
        return curr_prod;
    });
    return productArray;
}
}

export default ProductOperations;