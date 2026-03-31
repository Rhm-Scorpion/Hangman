 Hangman Game
A fully-featured Hangman game built with pure HTML, CSS and JavaScript — no frameworks, no dependencies, single file.
🎮 Features

4 Categories — Geography, Animals, Plants, Chemical Elements
Geography subcategories — Countries (204), Cities (243), Rivers (302), Mountains (286)
1,200+ words across 4 difficulty levels (Easy → Expert)
Session scoring — accumulate points across multiple words per session
Leaderboard — Top 10 sessions saved in localStorage
Statistics — accuracy, best streak, favourite category, total points
Daily Challenge — same word for everyone, seeded by date
Countdown 3-2-1 GO! before each game
Sound effects via Web Audio API (no external files)
Confetti in category colours on win
Particle effects on correct letter guesses
Animated clouds drifting in background
Custom username saved to localStorage
PWA — installable on home screen, works offline
Fully responsive — mobile, tablet, desktop

🚀 Deploy
Single HTML file — no build step needed.

GitHub Pages

Push to repo
Settings → Pages → Source: main branch /root
Rename file to index.html

📁 Structure
hangman.html   ← entire game (HTML + CSS + JS, ~100KB)
README.md      ← this file
🛠 Tech Stack

Vanilla JavaScript (ES6+)
CSS3 (Grid, Flexbox, clamp(), animations)
Web Audio API (sound effects)
Canvas API (confetti + particles)
localStorage (scores, stats, username)
Service Worker (PWA / offline)


Built March 2026
