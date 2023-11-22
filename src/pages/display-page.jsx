//it is the main page called by app.js it make various calls and return the entire page to app.js
import Grid from '@mui/material/Grid';
import Message from "../components/message";
import Card2 from '../components/card2';
import ProductOperations from "../services/product-operations";
import { useState } from 'react';
import {  Left } from '../components/header';
import Head from '../components/head';
import Log from '../components/log';
import Pay from '../components/google-pay';


<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Material+Icons+Two+Tone"
  // Import the two tones MD variant                           ^^^^^^^^
/>;


const Products=await ProductOperations.loadproduct();

function DisplayFunction(){
    
const[count,setCount]=useState(0);
const Update=(val,prod_id)=>{
       const prod = Products.find(currentProduct=>currentProduct.id===prod_id);
       if(val==='+')prod.quantity++;
       else prod.quantity--;
       setCount(count+1);
}
    var total=0.0;
    return (
    <>  
    {/* < -- - -- -- - - - - - - - -- -- - - - - -HEADER  SECTION  ---------- - -- -- - - - - - --  --  -- ->*/}
        <Grid container spacing={1} margin={2} bgcolor={'#FAF6F0'}>
        <Grid item xs={2}>
        <img src="https://s3-eu-west-1.amazonaws.com/tpd/logos/47783f580000640005020e95/0x0.png" height="100px" className="src" />
        </Grid>
        <Grid container xs={7} >
        <Message classname="Puma"/>
        
        </Grid>
        <div><Log/></div>
        </Grid>
        
        <Grid container spacing={1} margin={2} bgcolor={'#FAF6F0'}>
            <Grid container item xs={9}bgcolor={'#FAF6F0'}>
            <Grid container item xs={12}bgcolor={'#FAF6F0'}>

          {/* < -- - -- -- - - - - - - - -- -- - - - - -PRODUCT  SECTION  ---------- - -- -- - - - - - --  --  -- ->*/}
            <Head classname="Products"/>
            </Grid>
            <Left fn={Update}/>
            </Grid>
            <Grid item xs={2}bgcolor={'#FAF6F0'}>

          {/* < -- - -- -- - - - - - - - -- -- - - - - -BASKET  SECTION  ---------- - -- -- - - - - - --  --  -- ->*/}
            <Head classname="Basket"/> 
            <dir></dir>
                <Grid container rowSpacing={1} bgcolor={'#F4DFC8'}>
                    {Products.map(prod=>{
                    total=total+parseFloat(prod.price)*prod.quantity;
                    if(prod.quantity)return (<Card2 id={prod.id} name={prod.name} quantity={prod.quantity} price={prod.price} url={prod.url} fn={Update}/>)})}
                </Grid>
                <dir></dir>
                <Message classname="Total : " val={total} heading={5}/>
                <Message classname="Payable Amount : " val={total*1.18} heading={5}/>


              {/* < -- - -- -- - - - - - - - -- -- - - - - -PAY  BUTTON  ---------- - -- -- - - - - - --  --  -- ->*/}
                <Pay/>

            </Grid>
        </Grid>
    
                  
    </>
    );
} 
export default DisplayFunction;