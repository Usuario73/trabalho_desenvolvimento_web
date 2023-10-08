const seatMap = document.querySelector('.seat-map');
const selectedSeats = document.getElementById('selected-seats');
const buyButton = document.getElementById('buy-button');
const totalPrice = document.getElementById('total-price'); // Elemento para exibir o preço total

const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']; // Lista de fileiras
const seatsPerRow = 10; // Número de assentos por fileira
const seatPrice = 10; // Preço de cada poltrona em R$

let selectedCount = 0;

// Função para criar as cadeiras
function createSeats() {
    for (let row of rows) {
        for (let i = 1; i <= seatsPerRow; i++) {
            const seat = document.createElement('div');
            seat.classList.add('seat');
            seat.textContent = `${row}${i}`;
            seatMap.appendChild(seat);

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
        }
    }
}

// Função para atualizar o contador de assentos selecionados
function updateSelectedCount() {
    selectedSeats.innerText = selectedCount;
    updateTotalPrice();
}

// Função para atualizar o preço total
function updateTotalPrice() {
    const total = selectedCount * seatPrice;
    totalPrice.innerText = `Total: R$ ${total.toFixed(2)}`;
}

// Inicializa a criação das cadeiras
createSeats();

buyButton.addEventListener('click', () => {
    alert(`Você comprou ${selectedCount} assento(s) por R$ ${selectedCount * seatPrice}.`);
});
