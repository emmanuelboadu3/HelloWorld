// ==========================
// JavaScript Memory Game
// Author: Emmanuel Boadu
// ==========================

document.addEventListener("DOMContentLoaded", () => {
    // Get references to the game board and stats display
    const board = document.getElementById("game-board");
    const stats = document.getElementById("stats");

    // Define card symbols (pairs of emojis)
    let cards = [
        "🍎", "🍌", "🍇", "🍒",
        "🍎", "🍌", "🍇", "🍒",
        "🍉", "🥝", "🍍", "🍓",
        "🍉", "🥝", "🍍", "🍓"
    ];

    // Shuffle cards randomly using ES6 array method
    cards = cards.sort(() => Math.random() - 0.5);

    // Track flipped cards, matched pairs, moves, and start time
    let flipped = [];
    let matched = [];
    let moves = 0;
    let startTime = Date.now();

    // ==========================
    // Recursively render all cards on the board
    // ==========================
    function renderCards(index = 0) {
        if (index === cards.length) return; // Base case: stop when all cards are rendered

        // Create a card element
        const card = document.createElement("div");
        card.className = "card";
        card.textContent = "?"; // Initially hidden
        card.onclick = () => flipCard(card, cards[index]); // Add click event to flip card

        // Add card to the board
        board.appendChild(card);

        // Recursive call to render the next card
        renderCards(index + 1);
    }

    // ==========================
    // Flip a card to reveal its symbol
    // ==========================
    function flipCard(card, symbol) {
        try {
            // Prevent flipping the same card twice
            if (flipped.includes(card)) throw new Error("Card already flipped!");

            // Reveal the symbol and add animation
            card.textContent = symbol;
            card.classList.add("flipped", "animate__animated", "animate__flipInY");

            // Track flipped card
            flipped.push(card);
            moves++; // Count each flip

            // If two cards are flipped, check for a match
            if (flipped.length === 2) {
                checkMatch();
            }
        } catch (error) {
            // Show error using SweetAlert2
            Swal.fire("Error", error.message, "error");
        }
    }

    // ==========================
    // Check if two flipped cards match
    // ==========================
    function checkMatch() {
        const [card1, card2] = flipped; // Get the two flipped cards

        if (card1.textContent === card2.textContent) {
            // If they match, add both cards to matched array
            matched.push(card1, card2);
        } else {
            // If not, flip them back after a short delay
            setTimeout(() => {
                card1.textContent = "?";
                card2.textContent = "?";
                card1.classList.remove("flipped");
                card2.classList.remove("flipped");
            }, 1000);
        }

        // Reset flipped array for next turn
        flipped = [];

        // Update stats after each attempt
        updateStats();
    }

    // ==========================
    // Update stats and check for game completion
    // ==========================
    function updateStats() {
        // Calculate elapsed time in seconds
        const elapsed = Math.floor((Date.now() - startTime) / 1000);

        // Show stats: matched pairs, moves, and time
        stats.textContent = `Matched: ${matched.length / 2} / ${cards.length / 2} | Moves: ${moves} | Time: ${elapsed}s`;

        // If all pairs are matched, show success message with celebration image
        if (matched.length === cards.length) {
            Swal.fire({
                title: "Congratulations!",
                text: `You matched all the cards in ${moves} moves and ${elapsed} seconds!`,
                icon: "success", // built-in success icon
                imageUrl: "https://cdn-icons-png.flaticon.com/512/190/190411.png", // trophy image
                imageWidth: 100,
                imageHeight: 100,
                imageAlt: "Celebration image",
                confirmButtonText: "Play Again"
            }).then((result) => {
                if (result.isConfirmed) resetGame(); // restart game if confirmed
            });
        }
    }

    // ==========================
    // Reset the game
    // ==========================
    function resetGame() {
        // Clear the board and reset variables
        board.innerHTML = "";
        matched = [];
        flipped = [];
        moves = 0;
        startTime = Date.now();

        // Shuffle cards again
        cards = cards.sort(() => Math.random() - 0.5);

        // Render cards and reset stats
        renderCards();
        updateStats();
    }

    // ==========================
    // Start the game
    // ==========================
    renderCards();
    updateStats();
});
