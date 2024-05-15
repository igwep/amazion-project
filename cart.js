export const cart  = [
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity:1

},
{
  productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                        quantity:2

},
{
  productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
quantity:1

}
];
export function addToCart(productId){
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
  };
  export function updateCart(){
    let cartNumber = 0;
      cart.forEach((item) => {
        cartNumber += item.quantity;

      } );
  
      document.querySelector('.cart-quantity').innerHTML = cartNumber;
  }