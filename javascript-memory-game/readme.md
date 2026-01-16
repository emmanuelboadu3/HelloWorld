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
- Randomly shuffled card pairs using fruit emojis
- Interactive card flipping with animations (Animate.css)
- Move counter and elapsed time tracking (formatted as mm:ss)
- Match detection and automatic card reset for mismatches
- Game state management using JavaScript arrays
- User-friendly error handling using SweetAlert2
- Easy game reset functionality

*Note: The congratulatory popup has been removed for simplicity, but game completion is tracked.*

---

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- SweetAlert2 (for alerts and error handling)
- Animate.css (for card flip animations)

---

## How the Game Works
1. Cards are shuffled randomly when the game starts.
2. Each card is displayed face-down with a "?" symbol.
3. Clicking a card flips it to reveal an emoji.
4. When two cards are flipped:
   - If they match, they remain visible.
   - If they do not match, they flip back after a short delay.
5. The game tracks:
   - Number of moves
   - Number of matched pairs
   - Time elapsed
6. When all pairs are matched, the game logs completion in the console.
7. The player can restart the game at any time.

---

## Key JavaScript Concepts Demonstrated
- `DOMContentLoaded` event handling
- DOM manipulation (`createElement`, `appendChild`, `classList`)
- Recursive rendering of game cards
- Array methods (`sort`, `push`, `includes`)
- Error handling with `try...catch`
- Timing functions (`setTimeout`)
- Game state management (tracking flipped and matched cards, moves, and time)
- Modular, readable code structure

---

## Project Structure

## Video Demonstration 
A 4–5 minute video demonstration and code walkthrough of this project can be found here:
 [https://youtu.be/mAUUAMvSj6Q]