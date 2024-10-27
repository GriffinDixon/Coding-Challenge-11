// Task 2 Add Event Listener for Product Selection
document.addEventListener('DOMContentLoaded', function() {
    const productSelect = document.getElementById('product');
    const quantityInput = document.getElementById('quantity');
    const totalPriceDisplay = document.getElementById('totalPrice');
    const orderButton = document.getElementById('orderButton');
    const orderSummary = document.getElementById('orderSummary');

    // Function to update total price based on selected product and quantity
    function updateTotalPrice() {
        const productPrice = parseFloat(productSelect.value); // Get selected product price
        const quantity = parseInt(quantityInput.value); // Get quantity
        const totalPrice = productPrice * quantity; // Calculate total price
        totalPriceDisplay.textContent = `$${totalPrice}`; // Update displayed total price
    }

    // Event listener for product selection
    productSelect.addEventListener('change', updateTotalPrice);
    
    // Event listener for quantity input
    quantityInput.addEventListener('input', updateTotalPrice);

    // Event listener for placing the order
    orderButton.addEventListener('click', function() {
        const selectedProduct = productSelect.options[productSelect.selectedIndex].text;
        const quantity = quantityInput.value;
        const totalPrice = totalPriceDisplay.textContent;

        // Display order summary
        orderSummary.innerHTML = `<strong>Order Summary:</strong><br>
                                   Product: ${selectedProduct}<br>
                                   Quantity: ${quantity}<br>
                                   Total Price: ${totalPrice}`;
    });
});
