let preSelectedSeats = model.inputs.orderpage.selectedSeats
let totalPrice = 200;
let selectedSeatsCount = 2;
let ticketsAmount = 2;
let selectedSeats = [];
function updateViewOrderPage() {
    model.app.currentPage = 'orderPage';
    const movieId = model.inputs.search.movieId;
    const movieLanguage = model.inputs.selectDay.movieLanguage;
    const selectTime = model.inputs.selectDay.selectTime;
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
            <div class='seatsContainer'>${generateRowHtml()}</div>
            
            <div id="screen"> </div>
            <div class= 'row'>
             <span id="selectedCount"></span>
        </div>
        </div>
        <div class='movieDetails'>
        <div id='selectedSeats'></div>
        <div id='totalPrice'>Total Price: $${totalPrice}</div>
        </div>
        <button onclick="goBackToSelectedMovie()">Back to movies</button>
        <button onclick="updateViewPaymentPage()">Continue to payment</button>
    `;
    selectedSeatsCount = document.querySelectorAll('.seat.selected').length;
    updateSelectedCount();
    selectSeats();
    preSelectSeats();
    updateSelectedSeatsDisplay();
}
function preSelectSeats() {
    const selectedSeats = model.inputs.orderpage.selectedSeats;
    if (selectedSeats === undefined) 
        updateModelSelectSeat(1, 5);
    updateModelSelectSeat(1, 4);
    


}
function updateModelSelectSeat(row, seat) {
    const seatElement = document.querySelector(`.seat[row="${row}"][seat="${seat}"]`);
    seatElement.classList.add('selected');
    selectedSeatsCount = document.querySelectorAll('.seat.selected').length;
    selectedSeats.push({ row: row, seat: seat });
    model.inputs.orderpage.selectedSeats = selectedSeats;
    updateSelectedCount();
    updateSelectedSeatsDisplay();
}

function generateRowHtml() {
    const allSeats = model.hall1;
    let html = '';
    for (let row = 1; row <= 4; row++) {
        html += `<div class='row row${row}'>`;
        for (let i = 0; i < allSeats.length; i++) {
            const seat = allSeats[i];
            if (seat.row === row) {
                html += /*HTML*/`
                <div 
                    class='seat seat${seat.seat}' 
                    row='${seat.row}' 
                    seat='${seat.seat}'
                ></div>`;
            }
        }
        html += '</div>';
    }
    return html;
}

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
    seats.forEach((seat) => {
        const row = seat.getAttribute('row');
        const seatNumber = seat.getAttribute('seat');
        seat.addEventListener('click', () => {
            if (seat.classList.contains('selected')) {
                seat.classList.remove('selected');
                selectedSeatsCount--;
                selectedSeats = selectedSeats.filter(
                    (selectedSeat) => selectedSeat.row !== row || selectedSeat.seat !== seatNumber)
                model.inputs.orderpage.selectedSeats = selectedSeats;
                console.log(model.inputs.orderpage.selectedSeats);
                console.log(selectedSeats);
            } else {
                if (selectedSeatsCount < ticketsAmount) {
                    seat.classList.add('selected');
                    selectedSeatsCount++;
                    selectedSeats.push({ row: row, seat: seatNumber });
                    model.inputs.orderpage.selectedSeats = selectedSeats;
                    console.log(selectedSeats);
                    console.log(model.inputs.orderpage.selectedSeats);
                } else {
                    alert(`You can only select ${ticketsAmount} seats.`);
                }
            }
            updateSelectedCount();
            updateSelectedSeatsDisplay();
        });
    });
}
function updateSelectedSeatsDisplay() {
    const selectedSeatsDisplay = document.getElementById('selectedSeats');
    selectedSeatsDisplay.innerHTML = '';
    preSelectedSeats = model.inputs.orderpage.selectedSeats
    console.log(preSelectedSeats);
    for (const seat of selectedSeats) {
        console.log(seat);
        selectedSeatsDisplay.innerHTML += `
            <div class='selectedSeat'>Row: ${seat.row}, Seat: ${seat.seat}</div>
        `;
    }
  
}
