// ==========================
// Memory Game Module Submission
// Course: CSE 310
// Author: Emmanuel Boadu
// This file contains the full implementation of the Memory Game.
// It demonstrates recursion, ES6 array methods, exception handling,
// and external libraries (SweetAlert2, Animate.css).
// ==========================

document.addEventListener("DOMContentLoaded", () => {
    // ==========================
    // DOM references
    // ==========================
    const board = document.getElementById("game-board");
    const stats = document.getElementById("stats");

    // ==========================
    // Card setup: 8 pairs of fruit emojis
    // ==========================
    let cards = [
        "🍎", "🍌", "🍇", "🍒",
        "🍎", "🍌", "🍇", "🍒",
        "🍉", "🥝", "🍍", "🍓",
        "🍉", "🥝", "🍍", "🍓"
    ];

    // Shuffle cards randomly using ES6 array method
    cards = cards.sort(() => Math.random() - 0.5);

    // ==========================
    // Game state variables
    // ==========================
    let flipped = [];   // currently flipped cards
    let matched = [];   // stores one symbol per matched pair
    let moves = 0;      // number of flips
    let startTime = Date.now(); // track start time

    // ==========================
    // Helper: Format elapsed time into mm:ss
    // ==========================
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}m ${secs}s`;
    }

    // ==========================
    // Recursively render all cards on the board
    // ==========================
    function renderCards(index = 0) {
        if (index === cards.length) return; // Base case

        const card = document.createElement("div");
        card.className = "card";
        card.textContent = "?"; // Hidden initially
        card.onclick = () => flipCard(card, cards[index]); // Flip on click

        board.appendChild(card);

        renderCards(index + 1); // Recursive call
    }

    // ==========================
    // Flip a card to reveal its symbol
    // ==========================
    function flipCard(card, symbol) {
        try {
            if (flipped.includes(card)) throw new Error("Card already flipped!");

            card.textContent = symbol;
            card.classList.add("flipped", "animate__animated", "animate__flipInY");

            flipped.push(card);
            moves++; // Count each flip

            if (flipped.length === 2) {
                checkMatch();
            }
        } catch (error) {
            // SweetAlert2 used for error handling
            Swal.fire("Error", error.message, "error");
        }
    }

    // ==========================
    // Check if two flipped cards match
    // ==========================
    function checkMatch() {
        const [card1, card2] = flipped;

        if (card1.textContent === card2.textContent) {
            // Push one symbol per pair
            matched.push(card1.textContent);
        } else {
            // Flip back if not matched
            setTimeout(() => {
                card1.textContent = "?";
                card2.textContent = "?";
                card1.classList.remove("flipped");
                card2.classList.remove("flipped");
            }, 1000);
        }

        flipped = [];
        updateStats();
    }

    // ==========================
    // Update stats (pairs matched, moves, time)
    // ==========================
    function updateStats() {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);

        stats.textContent = `Matched: ${matched.length} / ${cards.length / 2} | Moves: ${moves} | Time: ${formatTime(elapsed)}`;

        
    }

    // ==========================
    // Reset the game
    // ==========================
    function resetGame() {
        board.innerHTML = "";
        matched = [];
        flipped = [];
        moves = 0;
        startTime = Date.now();

        cards = cards.sort(() => Math.random() - 0.5);

        renderCards();
        updateStats();
    }

    // ==========================
    // Start the game
    // ==========================
    renderCards();
    updateStats();
});

// ==========================
// End of Memory Game Code
// ==========================
