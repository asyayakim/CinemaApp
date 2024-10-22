function updateViewPaymentPage() {
    model.inputs.orderpage.totalPrice = totalPrice;
    model.app.currentPage = 'paymentPage';
    const movieId = model.inputs.search.movieId;
    document.getElementById('app').innerHTML = /*HTML*/`
    <h1>Payment Process</h1>
    <div id= "payment">
    <div id=column1><h2>Card Details</h2>
    <h3>Total price: ${totalPrice}$</h3>
    Name on your card<br><input id="cardHoldername" placeholder="write your first name" oninput="model.inputs.paymentPage.cardHoldername = this.value"><br>
    Surname on your card<br><input id="cardHolderSurname" placeholder="write your surname" oninput="model.inputs.paymentPage.cardHolderSurname = this.value"><br>
    Card number<br><input id="bankCardDetails" placeholder="bank card" oninput="model.inputs.paymentPage.cardHolderSurname = this.value"><br>
    Security code<br><input id="secretCode" placeholder="secret code" oninput="model.inputs.paymentPage.cardHolderSurname = this.value"><br>
    Email adress<br><input id="cardHolderEmail" placeholder="write your email" oninput="model.inputs.paymentPage.cardHolderSurname = this.value"><br>
    </div>
    <div id=column2>
    <button onclick="processPayment()">Pay ${totalPrice}$</button>
    <button onclick="backToOrderPage()">Back</button>
    </div>
    </div>
    `; 
}

function backToOrderPage() {
    model.app.currentPage = 'orderPage';

    updateView();
}