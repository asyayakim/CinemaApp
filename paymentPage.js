function updateViewPaymentPage() {
    model.inputs.orderpage.totalPrice = totalPrice;
    model.app.currentPage = 'paymentPage';
    const movieId = model.inputs.search.movieId;
    document.getElementById('app').innerHTML = /*HTML*/`
    <h1>Payment Process</h1>
<div id="payment">
    <div id="column1">
        <h2 class="paymentPageTextColour">Payment Details</h2>
    </div>
    <div id="column2">
        <div class="paymentPageTextColour">Total price: ${totalPrice}$</div>
    </div>
    <div id="column3">
        <div class="paymentPageTextColour">Card holder*</div>
        <input id="cardHoldername" placeholder="Jonas Jons" oninput="model.inputs.paymentPage.cardHoldername = this.value">
        <span id="cardHoldernameError" class="error"></span><br>

        <div class="paymentPageTextColour">Card number*</div>
        <input id="bankCardDetails" type="number" placeholder="1111 1111 1111 1111" oninput="model.inputs.paymentPage.bankCardDetails = this.value">
        <span id="bankCardDetailsError" class="error"></span><br>
    </div>
    <div id="column4">
        <div id="rowOne">
            <div class="paymentPageTextColour">Security code*</div>
            <input id="secretCode" type="number" placeholder="123" oninput="model.inputs.paymentPage.secretCode = this.value">
            <span id="secretCodeError" class="error"></span><br>
        </div>
        <div id="rowTwo">
            <div class="paymentPageTextColour">Expiration date*</div>
            <input id="expirationDate" type="text" placeholder="MM/YY" oninput="model.inputs.paymentPage.expirationDate = this.value">
            <span id="expirationDateError" class="error"></span><br>
        </div>
    </div>
    <div id="column5">
        <div class="paymentPageTextColour">Email address</div>
        <input id="cardHolderEmail" placeholder="jonasjons@gmail.com" oninput="model.inputs.paymentPage.email = this.value">
        <span id="cardHolderEmailError" class="error"></span><br>
    </div>
    <div id="column6">
        <button onclick="processPayment()">Confirm Payment ${totalPrice}$</button>
    </div>
</div>
<button onclick="backToOrderPage()">Back</button>
    `;
}
function paymentDataCheck() {
    let cardHoldername = model.inputs.paymentPage.cardHoldername;
    let bankCardDetails = model.inputs.paymentPage.bankCardDetails;
    let secretCode = model.inputs.paymentPage.secretCode;
    let expirationDate = model.inputs.paymentPage.expirationDate;
    clearErrors();
    if (cardHoldername == '' || bankCardDetails == '' || secretCode == '' || expirationDate == '') {
        showErrorCardHolderName('Please fill all the fields');
        return false;
    }
    if (cardHoldername == '') {
        showErrorCardHolderName('Please fill all the fields');
        return false;
    }
    if (bankCardDetails.length != 16) {
        showErrorBankCardDetails('bankCardDetails', 'Card number must be 16 digits');
        return false;
    }
    if (secretCode.length != 3) {
        showErrorSecretCode('secretCode', 'Security code must be 3 digits');
        return false;
    }
    if (expirationDate.length != 5) {
        showErrorExpirationDate('expirationDate', 'Expiration date must be in MM/YY format');
        return false;
    }
    if (validateEmail() == false) {
        return false;
    }
    return true;
}

function validateEmail() {
    let cardHolderEmail = model.inputs.paymentPage.email;
    if (cardHolderEmail === '' || !cardHolderEmail.includes('@') || !cardHolderEmail.includes('.')) {
        showErrorCardHolderEmail('cardHolderEmail', 'Please enter a valid email');
        return false;
    }
    return true;
}  
function showErrorCardHolderName(message) {
    document.getElementById('cardHoldername').style.border = '1px solid red';
    document.getElementById('cardHoldernameError').innerText = message;
}

function showErrorBankCardDetails(message) {
    document.getElementById('bankCardDetails').style.border = '1px solid red';
    document.getElementById('bankCardDetailsError').innerText = message;
}

function showErrorSecretCode(message) {
    document.getElementById('secretCode').style.border = '1px solid red';
    document.getElementById('secretCodeError').innerText = message;
}

function showErrorExpirationDate(message) {
    document.getElementById('expirationDate').style.border = '1px solid red';
    document.getElementById('expirationDateError').innerText = message;
}

function showErrorCardHolderEmail(message) {
    document.getElementById('cardHolderEmail').style.border = '1px solid red';
    document.getElementById('cardHolderEmailError').innerText = message;
}

function clearErrors() {
    document.getElementById('cardHoldername').style.border = '1px solid #ccc';
    document.getElementById('cardHoldernameError').innerText = '';
    document.getElementById('bankCardDetails').style.border = '1px solid #ccc';
    document.getElementById('bankCardDetailsError').innerText = '';
    document.getElementById('secretCode').style.border = '1px solid #ccc';
    document.getElementById('secretCodeError').innerText = '';
    document.getElementById('expirationDate').style.border = '1px solid #ccc';
    document.getElementById('expirationDateError').innerText = '';
    document.getElementById('cardHolderEmail').style.border = '1px solid #ccc';
    document.getElementById('cardHolderEmailError').innerText = '';
}
        
function processPayment() {
    if (!paymentDataCheck())
        return;
    alert('Payment Processed');
    model.app.currentPage = 'orderPage';
    updateView();
}

function backToOrderPage() {
    model.app.currentPage = 'orderPage';

    updateView();
}