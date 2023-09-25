const seats = document.querySelectorAll('.seat');
const selectedSeats = document.getElementById('selected-seats');
const buyButton = document.getElementById('buy-button');

let selectedCount = 0;

seats.forEach(seat => {
    seat.addEventListener('click', () => {
        if (!seat.classList.contains('selected')) {
            seat.classList.add('selected');
            selectedCount++;
        } else {
            seat.classList.remove('selected');
            selectedCount--;
        }
        updateSelectedCount();
    });
});

function updateSelectedCount() {
    selectedSeats.innerText = selectedCount;
}

buyButton.addEventListener('click', () => {
    alert(`Você comprou ${selectedCount} assento(s).`);
});
