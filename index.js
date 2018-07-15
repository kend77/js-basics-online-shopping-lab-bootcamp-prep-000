var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  cart.push({ itemName: item, price: Math.floor(Math.random() * 100)})
  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  const items = cart.map((item, idx) => {
    if (idx === (cart.length - 1)) {
      return `and ${item.itemName} at $${item.price}.`
    } else {
      return `you have ${item.itemName} at $${item.price}`
    }
  })
  return cart.length ? `In your cart you have, ${items.join(',')}` : 'Your shopping cart is empty.'
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
