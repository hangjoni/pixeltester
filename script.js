// Get the add to cart button
const addToCartButton = document.getElementById('add-to-cart');

// Add event listener to the button
addToCartButton.addEventListener('click', function() {
  // Track the Add to Cart event
  fbq('track', 'AddToCart', {
    content_ids: ['my_product_id'], // Replace with your product ID
    content_type: 'product',
    value: 10.99, // Replace with your product price
    currency: 'USD'
  });

  // Update the cart div
  const cartDiv = document.getElementById('cart');
  cartDiv.innerHTML = 'Product added to cart!';
});
