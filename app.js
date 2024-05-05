import { cart  } from "./cart.js";
import { products } from "./products.js";

    const linkToggle = document.querySelector('.link-toggle');
    const burger = document.querySelector('.burger');
    const productGrid = document.querySelector('.product-grid'); 
    const cartQuantity = document.querySelector('.cart-quantity')
    burger.addEventListener('click',() => {
        if(linkToggle.classList.contains('h-0')){
            linkToggle.classList.remove('h-0');
            linkToggle.classList.add('h-24');
        }
        else {
            linkToggle.classList.remove('h-24')
            linkToggle.classList.add('h-0');
        };
        
    });
    
let productHtml = '';
 products.forEach((product) => {
    productHtml += `
    <div class="w-full  h-[30rem] overflow-hidden flex flex-col justify-center p-6 "><!-- item container -->
                  <div class="w-[70%] h-[40%]  flex justify-center items-center  bg-contain"><!-- image container -->
                    <img src="${product.image}" alt="" class="w-full h-full">
                  </div>
                 <div class="mt-4 ">
                 <div class="h-[3rem] "><!-- item name -->
                 <p class=" test-sm w-full h-full ">
                     ${product.name}
                 </p>
               </div>
               <div class="flex gap-1 mt-2"><!-- rating -->
                 <img src="/images/ratings/rating-${product.rating.stars * 10}.png" alt="" class="h-5">
                 <p class="text-blue-400">${product.rating.count}</p>
               </div>
               <div class="mt-2"><!-- price -->
                 <p class="font-bold">$${(product.priceCents / 100).toFixed(2)}</p>
               </div>
               <!-- selection -->
                 <div class="mt-3">
                     <select class="bg-gray-200 rounded-md shadow-sm shadow-black js-quantity-selector-${product.id}">
                       <option selected value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                       <option value="4">4</option>
                       <option value="5">5</option>
                       <option value="6">6</option>
                       <option value="7">7</option>
                       <option value="8">8</option>
                       <option value="9">9</option>
                       <option value="10">10</option>
                     </select>
                   </div>
               <div class="cart-message-${product.id} text-green-500 pt-2 transition-all duration-300 opacity-0  w-7 h-0 text-sm mb-0 mt-0 text-nowrap flex">Added to cart <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
               <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
             </svg>
             </span>
               </div>
               <div class="cart-btn mt-14 flex items-center justify-center hover:bg-yellow-500 bg-yellow-400 p-1 rounded-2xl cursor-pointer" data-product-id="${product.id}"><!-- buttom -->
       +          <button class="">Add to Cart</button>
               </div>
                 </div>
                </div>
    
    `;
      
 });
 productGrid.innerHTML = productHtml;
 document.querySelectorAll('.cart-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
       const productId = btn.dataset.productId; 
       let matching = '';
       cart.forEach((item) => {
        if(productId === item.productId){
          matching = item;
        }
       })
       const SnumberOfItems = document.querySelector(`.js-quantity-selector-${productId}`);
       console.log(SnumberOfItems.value);
       let numberQunatity = Number(SnumberOfItems.value);
       const cartMessage = document.querySelector(`.cart-message-${productId}`);
       cartMessage.classList.remove('opacity-0');
       cartMessage.classList.add('opacity-100');
       setTimeout(removeCartMessage, 1000);
       function removeCartMessage(){
        cartMessage.classList.remove('opacity-100');
       cartMessage.classList.add('opacity-0');
       }

       if(matching){
        matching.quantity += numberQunatity;
       }
       else{
        cart.push({
          productId: productId,
          quantity:numberQunatity
         });
       }
       /* cart quantitiy */
      let cartNumber = 0
      cart.forEach((item) => {
        cartNumber += item.quantity;

      } );
       console.log(cart);
        cartQuantity.innerHTML = cartNumber;

    });
  });
  const topBtn = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  
  if(scrollHeight > 500){
    topBtn.classList.remove('hidden');
  }
  else{
    topBtn.classList.add('hidden')
  }

  })