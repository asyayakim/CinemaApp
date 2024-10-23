function updateViewPaymentPage() {
    model.inputs.orderpage.totalPrice = totalPrice;
    model.app.currentPage = 'paymentPage';
    const movieId = model.inputs.search.movieId;
    document.getElementById('app').innerHTML = /*HTML*/`
    <h1>Payment Process</h1>
    <div id= "payment">
    <div id=column1><h2 class='paymentPageTextColour'>Payment Details</h2>
    </div>
    <div id=column2>
    <div class='paymentPageTextColour'>Total price: ${totalPrice}$</div>
    </div>
    <div id=column3>
    <div class='paymentPageTextColour'>Card holder*</div><input id="cardHoldername" placeholder="Jonas Jons" oninput="model.inputs.paymentPage.cardHoldername = this.value"><br>
    <div class='paymentPageTextColour'>Card number*</div><input id="bankCardDetails" placeholder="1111 1111 1111 1111" oninput="model.inputs.paymentPage.bankCardDetails = this.value"><br>
    </div>
    <div id=column4>
    <div id='row1'>
    <div class='paymentPageTextColour'>Security code*</div><input id="secretCode" placeholder="123" oninput="model.inputs.paymentPage.secretCode = this.value"><br>
    </div>
    <div id='row2'>
    <div class='paymentPageTextColour'>Expiration date*</div><input id="expirationDate" placeholder="MM/YY" oninput="model.inputs.paymentPage.expirationDAte = this.value"><br>
    </div>
    </div>
    <div id=column5>
    <div class='paymentPageTextColour'>Email adress</div><input id="cardHolderEmail" placeholder="jonasjons@gmail.com" oninput="model.inputs.paymentPage.email = this.value"><br>
    </div>
    <div id=column6>
    <button onclick="processPayment()">Confirm Payment ${totalPrice}$</button>
    </div>
    </div>
    <button onclick="backToOrderPage()">Back</button>
    `; 
}

function backToOrderPage() {
    model.app.currentPage = 'orderPage';

    updateView();
}