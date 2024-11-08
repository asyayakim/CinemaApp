function updateViewPaymentPage() {
    model.inputs.orderpage.totalPrice = totalPrice;
    model.app.currentPage = 'paymentPage';
    const movieId = model.inputs.search.movieId;

    document.getElementById('app').innerHTML = /*HTML*/`
    <div class="main">
    <div class="header">
        <h1>Payment Process</h1>
    </div>
        <form onsubmit="processPayment(event)">
            <div id="payment">
                <div id="column1">
                    <h2 class="paymentPageTextColour">Payment Details</h2>
                </div>
                <div id="column2">
                    <div class="paymentPageTextColour">Total price: ${totalPrice}$</div>
                </div>
                <!-- Card Holder Name -->
                <div id="column3">
                    <div class="paymentPageTextColour">Card holder*</div>
                    <input id="cardHolderName" class="inputPayment" style="text-transform: uppercase" required placeholder="Jonas Jons" 
                    oninput="model.inputs.paymentPage.cardHoldername = this.value">
                    <span id="cardHolderNameError" class="error"></span><br>

                    <!-- Card Number -->
                    <div class="paymentPageTextColour">Card number*</div>
                    <input id="bankCardDetails" type="number" class="inputPayment" placeholder="1111 1111 1111 1111" required 
                           oninput="model.inputs.paymentPage.bankCardDetails = this.value">
                    <span id="bankCardDetailsError" class="error"></span><br>
                </div>

                <!-- Expiration Date -->
                <div id="column4">
                    <div id="rowOne" class="monthsStyle">
                        <div class="paymentPageTextColour">
                            Exp Month:
                            <select id="expirationMonth" required oninput="model.inputs.paymentPage.expirationMonth = this.value">
                                <option value="">Choose month</option>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                            <span id="expirationMonthError" class="error"></span><br>
                        </div>
                    </div>
                    <div id="rowTwo" class="monthsStyle">
                        <div class="paymentPageTextColour">
                            Exp Year:
                            <select id="expirationYear" required oninput="model.inputs.paymentPage.year = this.value">
                                <option value="">Choose Year</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                            </select>
                            <span id="expirationYearError" class="error"></span><br>
                        </div>
                    </div>
                </div>

                <!-- Security Code -->
                <div id="column5">
                    <div class="paymentPageTextColour">Secret code*</div>
                    <input id="secretCode" class="inputPayment" type="number" placeholder="123" required 
                           oninput="model.inputs.paymentPage.secretCode = this.value">
                    <span id="secretCodeError" class="error"></span><br>
                </div>

                <!-- Email Address -->
                <div id="column5">
                    <div class="paymentPageTextColour">Email address</div>
                    <input id="cardHolderEmail" class="inputPayment" type="email" required placeholder="jonasjons@gmail.com" 
                           oninput="model.inputs.paymentPage.email = this.value">
                    <span id="cardHolderEmailError" class="error"></span><br>
                </div>

                <!-- Submit Button -->
                <div id="column6">
                    <button type="submit">Confirm Payment ${totalPrice}$</button>
                </div>
            </div>
        </form>
    </div>
<button onclick="backToOrderPage()">Back</button>
    `;
}


function paymentDataCheck() {
    let cardHoldername = model.inputs.paymentPage.cardHoldername;
    let bankCardDetails = model.inputs.paymentPage.bankCardDetails;
    let secretCode = model.inputs.paymentPage.secretCode;
    let expirationDate = model.inputs.paymentPage.expirationDate;

    if (cardHoldername == '' || bankCardDetails == '' || secretCode == '' || expirationDate == '') {
        showErrorCardHolderName('Please fill all the fields');
        return false;
    }
    if (bankCardDetails.length != 16 || bankCardDetails.length == null) {
        showErrorBankCardDetails('Card number must be 16 digits');
        return false;
    }
    if (secretCode.length != 3 || secretCode == null) {
        showErrorSecretCode('Security code must be 3 digits');
        return false;
    }
    
    if (validateEmail() == false) {
        return false;
    }
    return true;
    
}
function bookSeats() {
    movieId = model.inputs.search.movieId;
    const movie = findMovieById(movieId);
  
    const selectedTime = model.inputs.selectDay.selectTime;
    const hallShowtime = movie.hall1.find(h => h.movieShowTime === selectedTime);
    seatSelected = hallShowtime.seats.filter(seat => seat.selected);
    for (let i = 0; i < seatSelected.length; i++) {
        seatSelected[i].occupied = true;
        seatSelected[i].selected = false;
    }
    resetSelectedData();
}
function resetSelectedData() {
    model.inputs.selectDay.day = null;
    model.inputs.selectDay.movieLanguage = '';
    model.inputs.selectDay.selectTime = '';
    model.inputs.selectDay.movieId = null;
    model.inputs.orderpage.ticketsAmount = 0;
    console.log(model.inputs.orderpage.ticketsAmount);
    model.inputs.orderpage.email = '';
    model.inputs.orderpage.selectedSeats = [];
    selectedSeats = [];
    selectedSeatsCount = 0;
    totalPrice = 0;
}

function validateEmail() {
    let cardHolderEmail = model.inputs.paymentPage.email;
    if (cardHolderEmail === '' || !cardHolderEmail.includes('@') || !cardHolderEmail.includes('.')) {
        showErrorCardHolderEmail('Please enter a valid email address with @ and .');
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
    document.getElementById('cardHolderEmail').style.border = '1px solid #ccc';
    document.getElementById('cardHolderEmailError').innerText = '';
}
        
function processPayment(event) {
    event.preventDefault();
    if (!paymentDataCheck())
        return;
    alert('Payment Processed');
    bookSeats();
    model.app.currentPage = 'search';
    updateView();
}

function backToOrderPage() {
    model.app.currentPage = 'orderPage';

    updateView();
}