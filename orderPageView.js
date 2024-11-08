let totalPrice = 200;
let selectedSeatsCount = 0;
let selectedSeats = [];
function updateViewOrderPage() {
    if (model.inputs.orderpage.ticketsAmount === 0) {
        model.inputs.orderpage.ticketsAmount = 2;
    }
    const ticketsAmount = model.inputs.orderpage.ticketsAmount;
    console.log(model.inputs.orderpage.ticketsAmount);
    model.app.currentPage = 'orderPage';
    const movieId = model.inputs.search.movieId;
    const movieLanguage = model.inputs.selectDay.movieLanguage;
    const selectTime = model.inputs.selectDay.selectTime;
    const movie = findMovieById(movieId);
    selectedSeatsCount = document.querySelectorAll('.seat.selected').length;
    document.getElementById('app').innerHTML = /*HTML*/`
    <div class="main">
    <div class="header">
    <h1>Place Selection for ${movie.title}</h1>
    </div>
    <div class="movieDetails">
    <div class="rowtwo">
        <img src="${movie.imageUrl}" style="height: 150px"/><br/>
        </div>
        <div class="rowOne">
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
        </div>
        <button onclick="goBackToSelectedMovie()">Back to movies</button>
        <button onclick="continueToPayment()">Continue to payment</button>
    `;
    updateSelectedCount();
    updateSelectedSeatsDisplay();
    selectSeats();
    console.log(ticketsAmount);
}
function continueToPayment() {
    let ticketsAmount = model.inputs.orderpage.ticketsAmount;
    if (selectedSeatsCount !== ticketsAmount) {
        alert(`Select ${ticketsAmount} seats.`);
        return;

    }
    model.app.currentPage = 'paymentPage';
    updateViewPaymentPage();
}
function preSelectSeats() {
    movieId = model.inputs.search.movieId;
    const movie = findMovieById(movieId);
  
    const selectedTime = model.inputs.selectDay.selectTime;
    const hallShowtime = movie.hall1.find(h => h.movieShowTime === selectedTime);
    console.log(hallShowtime);
    hallShowtime.seats.forEach(seat => {
        if (seat.selected) {
            updateModelSelectSeat(seat.row, seat.seat);
        }
    });
}
function updateModelSelectSeat(row, seat) {
    movieId = model.inputs.search.movieId;
    const movie = findMovieById(movieId);
  
    const selectedTime = model.inputs.selectDay.selectTime;
    const hallShowtime = movie.hall1.find(h => h.movieShowTime === selectedTime);
    const modelSeat = hallShowtime.seats.find(s => s.row === row && s.seat === seat);
    const seatElement = document.querySelector(`.seat[row="${row}"][seat="${seat}"]`);
    if (seatElement) {
        seatElement.classList.add('selected');
        selectedSeatsCount = document.querySelectorAll('.seat.selected').length;
        selectedSeats.push({ row, seat });
        modelSeat.selected = true;
        model.inputs.orderpage.selectedSeats = selectedSeats;
        updateSelectedCount();
    }
}

function generateRowHtml() {
    movieId = model.inputs.search.movieId;
    const movie = findMovieById(movieId);
  
    const selectedTime = model.inputs.selectDay.selectTime;
    const hallShowtime = movie.hall1.find(h => h.movieShowTime === selectedTime);
    if (!hallShowtime) {
        console.error("Show time not available in hall1 for this movie");
        return '';
    }

    const allSeats = hallShowtime.seats;
    let html = '';
    for (let row = 1; row <= 4; row++) {
        html += `<div class='row row${row}'>`;
        for (let i = 0; i < allSeats.length; i++) {
            const seat = allSeats[i];
            if (seat.row === row) {
                const occupiedClass = seat.occupied ? 'occupied' : '';
                html += /*HTML*/`
                <div 
                    class='seat seat${seat.seat} ${occupiedClass}' 
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
    let ticketsAmount = model.inputs.orderpage.ticketsAmount;
    console.log(model.inputs.orderpage.ticketsAmount);
    totalPrice = ticketsAmount * 100;
    document.getElementById('totalPrice').textContent = `Total Price: $${totalPrice}`;
    model.inputs.orderpage.totalPrice = totalPrice;
}
function selectTicketsAmount(action) {
    let ticketsAmount = model.inputs.orderpage.ticketsAmount;
    console.log(model.inputs.orderpage.ticketsAmount);
    if (action == 'ticketsAmount+') {
        ticketsAmount++;

    } else if (action == 'ticketsAmount-') {
        ticketsAmount--;
        if (ticketsAmount < 1) {
            ticketsAmount = 1;
        }
    }
    model.inputs.orderpage.ticketsAmount = ticketsAmount;

    totalPriceForOrder(ticketsAmount);
    updateViewOrderPage()
}

function updateSelectedCount() {
    let ticketsAmount = model.inputs.orderpage.ticketsAmount;
    console.log(model.inputs.orderpage.ticketsAmount);
    let selectedCount = document.getElementById('selectedCount');
    selectedCount.textContent = `Selected Seats: ${selectedSeatsCount} / ${ticketsAmount}`;
}

function selectSeats() {
    let ticketsAmount = model.inputs.orderpage.ticketsAmount;
    console.log(model.inputs.orderpage.ticketsAmount);
    const availableSeats = document.querySelectorAll(
        '.row1 .seat:not(.occupied), .row2 .seat:not(.occupied), .row3 .seat:not(.occupied), .row4 .seat:not(.occupied)'
    );
    availableSeats.forEach((seatElement) => {
        const rowNumber = parseInt(seatElement.getAttribute('row'));
        const seatIndex = parseInt(seatElement.getAttribute('seat'));
        seatElement.addEventListener('click', () => {
            movieId = model.inputs.search.movieId;
            const movie = findMovieById(movieId);
          
            const selectedTime = model.inputs.selectDay.selectTime;
            const hallShowtime = movie.hall1.find(h => h.movieShowTime === selectedTime);
            const modelSeat = hallShowtime.seats.find(seat => seat.row === rowNumber && seat.seat === seatIndex);
            if (seatElement.classList.contains('selected')) {
                seatElement.classList.remove('selected');
                selectedSeatsCount--;
                modelSeat.selected = false;
                selectedSeats = selectedSeats.filter(
                    selectedSeat => selectedSeat.row !== rowNumber || selectedSeat.seat !== seatIndex
                );
            } else {
                if (selectedSeatsCount < ticketsAmount) {
                    seatElement.classList.add('selected');
                    selectedSeatsCount++;
                    selectedSeats.push({ row: rowNumber, seat: seatIndex });
                    modelSeat.selected = true;
                } else {
                    alert(`You can only select ${ticketsAmount} seats.`);
                }
            }
            model.inputs.orderpage.selectedSeats = selectedSeats;
            updateSelectedCount();
            updateSelectedSeatsDisplay();
        });
    });
}
function updateSelectedSeatsDisplay() {
    preSelectSeats();
    const selectedSeatsDisplay = document.getElementById('selectedSeats');
    selectedSeatsDisplay.innerHTML = '';
    movieId = model.inputs.search.movieId;
    const movie = findMovieById(movieId);
  
    const selectedTime = model.inputs.selectDay.selectTime;
    const hallShowtime = movie.hall1.find(h => h.movieShowTime === selectedTime);
    hallShowtime.seats
        .filter(seat => seat.selected)
        .forEach(({ row, seat }) => {
            selectedSeatsDisplay.innerHTML += `<div class='selectedSeat'>Row: ${row}, Seat: ${seat}</div>`;
        });
}
