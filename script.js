// Función para manejar el pedido
document.getElementById('orderButton').addEventListener('click', function() {
    var quantity = document.getElementById('quantity').value;
    var paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    var orderMessage = document.getElementById('orderMessage');

    if (!paymentMethod) {
        orderMessage.style.color = 'red';
        orderMessage.innerHTML = 'Por favor, selecciona un método de pago.';
        return;
    }

    var totalPrice = quantity == "1" ? 9000 : 9000 * 12;

    if (paymentMethod.value === 'transferencia') {
        orderMessage.style.color = 'green';
        orderMessage.innerHTML = `Total a pagar: $${totalPrice}. Realiza la transferencia a: <br>
        CBU: 0070338130004032379902 <br> Luego de realizar la transferencia, contáctanos para coordinar la entrega.`;
    } else if (paymentMethod.value === 'mercadoPago') {
        orderMessage.style.color = 'green';
        orderMessage.innerHTML = `Total a pagar: $${totalPrice}. Haz tu pago a través de Mercado Pago haciendo clic en el siguiente enlace: <br>
        <a href="https://link.mercadopago.com.ar/alejandrotok" target="_blank">Pagar con Mercado Pago</a>`;
    }
});
