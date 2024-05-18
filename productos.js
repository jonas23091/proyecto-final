document.querySelectorAll('.product').forEach(product => {
    const addButton = product.querySelector('.add-btn');
    const removeButton = product.querySelector('.remove-btn');
    const quantityElement = product.querySelector('.quantity');
    const priceElement = product.querySelector('.price');

    let price = parseFloat(priceElement.getAttribute('data-price'));
    let totalQuantity = 0;

    addButton.addEventListener('click', function() {
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        totalQuantity++;
        quantityElement.textContent = quantity;

        price += parseFloat(priceElement.getAttribute('data-price'));
        priceElement.textContent = '$' + price.toFixed(2);
    });

    removeButton.addEventListener('click', function() {
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantity--;
            totalQuantity--;
            quantityElement.textContent = quantity;

            price -= parseFloat(priceElement.getAttribute('data-price'));
            priceElement.textContent = '$' + price.toFixed(2);
        }
    });
});
