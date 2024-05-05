export const cart  = [];
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