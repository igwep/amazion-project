import { cart } from "./cart.js";
import { products } from "./products.js";
import { toTWO } from "./money.js";

let cartHTML = '';

cart.forEach((cartItem)=>{
   const cartID = cartItem.productId;
   let matching;
    products.forEach((product) =>{
        if(product.id === cartID){
            matching = product;
        };

    })
   cartHTML +=  `<div class="mt-2">
   
   <div class="another:w-[100%] w-[90%] border border-gray-400 rounded-md p-4  another:h-[16rem] h-[25rem]   ">
    <div class="text-xl mt-2 mb-4 text-green-700 font-bold"><p>Delivery date: Tuesday, June 21</p></div>
    <div class="flex smalls:flex-row flex-col gap-4 w-full">
        <div class="flex gap-6 w-full">
            <div class="md:w-[7rem]  md:h-[6rem] min-h-28 h-28 w-[7rem] flex justify-center items-center  bg-contain"><!-- image container -->
                <img src="${matching.image}" alt="" class="w-full h-full">
                </div>
                <div class="md:w-[90%] w-[70%] ">
                <p class="w-full font-bold ">${matching.name}</p>
                <p class="text-red-700 font-bold">$${toTWO(matching.priceCents)}</p>
                <p class="w-full text-nowrap">Quantity: ${cartItem.quantity} <span class="text-blue-500 ">Update Delete</span></p>
                </div>
        </div>
            <div class="w-[40%] min-w-[15rem] h-20 ">
            <div class="font-bold"><p>Choose a Delivery option</p></div>
            <div class="flex flex-col w-full">
            <div class="flex items-center"><input type="radio" name="" id="" class="h-5 w-6">
            <div class="">
                <p class="text-green-700 font-semibold">Tuesday, June 21</p>
                <p class="text-gray-400">FREE shipping</p>
            </div></div> 
            <div class="flex items-center"><input type="radio" name="" id="" class="h-5 w-6">
                <div class="">
                    <p class="text-green-700 font-semibold">Wednesday, june 15</p>
                    <p class="text-gray-400">$4.99-shipping</p>
                </div></div> 
                <div class="flex items-center"><input type="radio" name="" id="" class="h-5 w-6">
                    <div class="">
                        <p class="text-green-700 font-semibold">Monday, june 13</p>
                        <p class="text-gray-400">FREE shipping</p>
                    </div></div> 
            
            </div>


        </div>
    </div>
   
   </div>`;

    
})
document.querySelector('.cart-container').innerHTML = cartHTML;