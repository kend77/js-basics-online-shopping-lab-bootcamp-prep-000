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
  const itemPrice = Math.floor(Math.random() * 100) + 1
  cart.push({ itemName: item, itemPrice})
  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  const items = cart.map((item, idx) => {
    if (cart.length > 1 && idx === (cart.length - 1)) {
      return `and ${item.itemName} at $${item.itemPrice}.`
    } else {
      return `you have ${item.itemName} at $${item.itemPrice}`
    }
  })
  return cart.length ? `In your cart, ${items.join(',')}` : 'Your shopping cart is empty.'
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
