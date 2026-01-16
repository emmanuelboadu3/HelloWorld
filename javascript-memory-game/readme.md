# JavaScript Memory Game

## Overview
This project is a browser-based **Memory Matching Game** built with vanilla JavaScript.  
The goal of the game is to flip cards and find all matching pairs in the shortest time and with the fewest moves possible.

The game demonstrates core JavaScript concepts such as DOM manipulation, event handling, recursion, arrays, error handling, and basic game logic.

---

## Author
**Emmanuel Boadu**

---

## Features
- Randomly shuffled card pairs using emojis
- Interactive card flipping with animations
- Move counter and elapsed time tracking
- Match detection and automatic card reset for mismatches
- Game completion detection with success alert
- Option to restart the game after completion
- User-friendly error handling using SweetAlert2

---

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- SweetAlert2 (for alerts and notifications)
- Animate.css (for card flip animations)

---

## How the Game Works
1. Cards are shuffled randomly when the game starts.
2. Each card is displayed face-down.
3. Clicking a card flips it to reveal an emoji.
4. When two cards are flipped:
   - If they match, they remain visible.
   - If they do not match, they flip back after a short delay.
5. The game tracks:
   - Number of moves
   - Number of matched pairs
   - Time elapsed
6. When all pairs are matched, a congratulatory message is displayed.
7. The player can choose to restart the game.

---

## Key JavaScript Concepts Demonstrated
- `DOMContentLoaded` event handling
- DOM manipulation (`createElement`, `appendChild`)
- Recursive rendering of elements
- Array methods (`sort`, `push`, `includes`)
- Error handling with `try...catch`
- Timing functions (`setTimeout`)
- Game state management

---

## Project Structure
