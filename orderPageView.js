function updateViewOrderPage() {
    console.log("Stored in model:", model.inputs.selectDay.movieLanguage);
    model.app.currentPage = 'orderPage';
    const movieId = model.inputs.search.movieId;
    const movieLanguage= model.inputs.selectDay.movieLanguage;
    const selectTime =model.inputs.selectDay.selectTime;
    const movie = findMovieById(movieId);
    

    document.getElementById('app').innerHTML = /*HTML*/`
    <h1>Place Selection for ${movie.title}</h1>
    <div class="movieOrderDetailsLayout">
    <div class="rowOne">
        <img src="${movie.imageUrl}" style="height: 150px"/><br/>
        </div>
        <div class="rowTwo">
        <b>${movie.title}</b><br/>
        ${movie.year}<br/>
        ${movie.genre}<br/>
        Directed by: ${movie.director}<br/>
        <b>Selected Language:</b> ${movieLanguage}
        <br/>
        <b>Selected Time:</b> ${selectTime}<br/>
        <div id="selectedDateDisplay"></div>
        </div>
    </div>
        <div class="movieOrderDetails">
        <div class="layout">
    <div class="row1Tickets">
        <label for="selectTicketsAmount">Select Tickets Amount: </label>
    </div>
    <div class="row2Tickets">
        <div class="rowInRow1">
            <div name="ticketsAmount+" class="ticketsAmount" onclick='selectTicketsAmount("ticketsAmount+");'>+</div>
             <div class="ticketsAmountDisplay">${ticketsAmount}</div>
        </div>
        <div class="rowInRow2">
            <div name="ticketsAmount-" class="ticketsAmount" onclick='selectTicketsAmount("ticketsAmount-");'>-</div>
        </div>
    </div>
</div>

        </div>
        <div id='container' class="movieOrderDetails">
            <b>Select Seats:</b> <br/>
            <div class='row1'>${createSeatsHtml(1)}</div>
            <div class='row2'>${createSeatsHtml(2)}</div>
            <div class='row3'>${createSeatsHtml(3)}</div>
            <div class='row4'>${createSeatsHtml(4)}</div>
            
            <div id="screen"> </div>
            <div class= 'row'>
             <span id="selectedCount"></span>
        </div>
        </div>
        <div class='movieDetails'>
        <div id='totalPrice'>Total Price: $${totalPrice}</div>
        </div>
        <button onclick="goBackToSelectedMovie()">Back to movies</button>
        <button onclick="updateViewPaymentPage()">Continue to payment</button>
    `;
    selectedSeatsCount = document.querySelectorAll('.seat.selected').length;
    updateSelectedCount();
    selectSeats();
    updateSelectedDateDisplay();
}

function createSeatsHtml(index) {
    let seatsHtml = '';
    for (let i = 1; i <= 8; i++) {
        seatsHtml += `<div class='seat seat${i}'></div>`;
    }
    return seatsHtml;
}
let totalPrice = 200;
let selectedSeatsCount = 2;
let ticketsAmount = 2;
function totalPriceForOrder() {
    ticketsAmount = model.inputs.orderpage.ticketsAmount;
    totalPrice = ticketsAmount * 100;
    document.getElementById('totalPrice').textContent = `Total Price: $${totalPrice}`;
    model.inputs.orderpage.totalPrice = totalPrice;
}
function selectTicketsAmount(action) {
    if (action == 'ticketsAmount+') {
        ticketsAmount++;

    } else if (action == 'ticketsAmount-') {
        ticketsAmount--;
        if (ticketsAmount < 1) {
            ticketsAmount = 1;
        }
    }
    model.inputs.orderpage.ticketsAmount = ticketsAmount;
    totalPriceForOrder();
    updateViewOrderPage()
}

function updateSelectedCount() {
    const selectedCount = document.getElementById('selectedCount');
    selectedCount.textContent = `Selected Seats: ${selectedSeatsCount} / ${ticketsAmount}`;
}

function selectSeats() {
    const seats = document.querySelectorAll(
        '.row1 .seat:not(.occupied), .row2 .seat:not(.occupied), .row3 .seat:not(.occupied), .row4 .seat:not(.occupied)'
    );
    seats.forEach((seat)=> {
        seat.addEventListener('click', () => {
            if (seat.classList.contains('selected')) {
                seat.classList.remove('selected');
                selectedSeatsCount--;
            } else {
                if (selectedSeatsCount < ticketsAmount) {
                    seat.classList.add('selected');
                    selectedSeatsCount++;
                } else {
                    alert(`You can only select ${ticketsAmount} seats.`);
                }
            }
            updateSelectedCount();
        });
    });
}

function goBackToSelectedMovie() {
    model.app.currentPage = 'selectDate';
    resetSelectedData();
    updateView();
}

// nededed to reset selected data when you leave this page
function resetSelectedData() {
    model.inputs.selectDay.day = null;
    model.inputs.selectDay.movieLanguage = '';
    model.inputs.selectDay.selectTime = '';
}