document.getElementById('reservationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const numSeats = parseInt(document.getElementById("numSeats").value); // Get the number of seats to select
    let selectedCount = 0; // Track how many seats have been selected
    alert(`You can select ${numSeats} seats!`);

    // Clear any previous selections
    document.querySelectorAll('.seat.selected').forEach(seat => {
        seat.classList.remove('selected');
    });

    selectedCount = 0; // Reset selected count

    // Add event listener to each seat
    document.querySelectorAll('.seat').forEach(seat => {
        seat.addEventListener('click', function () {
            if (!this.classList.contains('reserved')) { // Check if seat is reserved
                if (this.classList.contains('selected')) {
                    this.classList.remove('selected'); // Deselect seat
                    selectedCount--; // Decrease selected count
                } else {
                    if (selectedCount < numSeats) { // Check seat limit
                        this.classList.add('selected'); // Select seat
                        selectedCount++; // Increase selected count
                    } else {
                        alert(`You can only select ${numSeats} seats!`); // Alert if limit reached
                    }
                }
            }
        });
    });
});