
    const linkToggle = document.querySelector('.link-toggle');
    const burger = document.querySelector('.burger');
    const productGrid = document.querySelector('.product-grid'); 
    const cartBtn = document.querySelectorAll('.cartBTN'); 
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
    console.log(linkToggle.classList);
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
                     <select class="bg-gray-200 rounded-md shadow-sm shadow-black">
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
               <div><!-- add to cart message -->
               </div>
               <div class="mt-14 flex items-center justify-center bg-yellow-400 p-1 rounded-2xl cursor-pointer"><!-- buttom -->
                 <button class="cartBTN">Add to Cart</button>
               </div>
                 </div>
                </div>
    
    `;
    
        productGrid.innerHTML = productHtml;
 });