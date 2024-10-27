// Task 2: Add Event Listener for Product Selection
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
// Task 3:
document.addEventListener('DOMContentLoaded', function() {
    const productSelect = document.getElementById('product');    // Product dropdown
    const quantityInput = document.getElementById('quantity');   // Quantity input
    const totalPriceDisplay = document.getElementById('totalPrice'); // Total price display
    const orderButton = document.getElementById('orderButton');  // Place Order button
    const orderSummary = document.getElementById('orderSummary'); // Order summary display
    const errorMessage = document.createElement('p');            // Error message element
    errorMessage.style.color = 'red';                            // Style the error message
    quantityInput.insertAdjacentElement('afterend', errorMessage); // Place error message below quantity input

    // Function to update the total price based on selected product and quantity
    function updateTotalPrice() {
        const productPrice = parseFloat(productSelect.value);    // Get selected product price
        const quantity = parseInt(quantityInput.value);          // Get quantity entered
        if (quantity > 0) {                                      // Check for valid quantity
            const totalPrice = productPrice * quantity;          // Calculate total price
            totalPriceDisplay.textContent = `$${totalPrice}`;    // Update displayed total price
            errorMessage.textContent = "";                       // Clear any error message
        } else {
            totalPriceDisplay.textContent = "$0";                // Set total price to $0 for invalid input
            errorMessage.textContent = "Please enter a quantity greater than 0.";
        }
    }

    // Event listener for product selection change
    productSelect.addEventListener('change', updateTotalPrice);

    // Event listener for quantity input change
    quantityInput.addEventListener('input', updateTotalPrice);

    // Event listener for placing the order
    orderButton.addEventListener('click', function() {
        const quantity = parseInt(quantityInput.value);

        // Check if the quantity is valid before submitting
        if (quantity > 0) {
            const selectedProduct = productSelect.options[productSelect.selectedIndex].text;
            const totalPrice = totalPriceDisplay.textContent;

            // Display order summary
            orderSummary.innerHTML = `<strong>Order Summary:</strong><br>
                                       Product: ${selectedProduct}<br>
                                       Quantity: ${quantity}<br>
                                       Total Price: ${totalPrice}`;
        } else {
            errorMessage.textContent = "Please enter a valid quantity before placing the order.";
        }
    });
});
