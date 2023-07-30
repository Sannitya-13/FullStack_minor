<!-- Project Title -->
# 🔥 Firebase Telegram Movie Bot

<!-- Project Description -->
🎥 Firebase Telegram Movie Bot is a Node.js script that integrates the Firebase Admin SDK and the Telegram Bot API to fetch movie details from the OMDB API and store them in a Firebase Firestore database. It allows users to send an IMDb ID to the Telegram bot, and the bot responds with movie information like title, release date, actors, and rating.

<!-- Table of Contents -->
## Table of Contents

- 🚀 [Getting Started](#getting-started)
  - 📋 [Prerequisites](#prerequisites)
  - ⚙️ [Installation](#installation)
- 💡 [Usage](#usage)
- ⚙️ [Configuration](#configuration)
- ⚙️ [How it Works](#how-it-works)
- 🤝 [Contributing](#contributing)
- 📝 [License](#license)
- 🙏 [Acknowledgements](#acknowledgements)

<!-- Getting Started -->
## 🚀 Getting Started

<!-- Prerequisites -->
### 📋 Prerequisites

- Node.js and npm (Node Package Manager) should be installed on your machine.
- You need a Firebase project with Firestore enabled. You will also need the service account key JSON file for the Firebase Admin SDK.

<!-- Installation -->
### ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/firebase-telegram-movie-bot.git
cd firebase-telegram-movie-bot

Install dependencies:
npm install
💡 Usage
Add your Firebase Admin SDK service account key to the root of the project with the filename serviceAccountKey.json.

Obtain a Telegram bot token from the BotFather on Telegram.

Open the index.js file and replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual Telegram bot token:

const token = 'YOUR_TELEGRAM_BOT_TOKEN';
const bot = new TelegramBot(token, { polling: true });

Run the script:
npm start
<!-- Configuration -->
⚙️ Configuration
The script provides a few configurable options that you can adjust in the index.js file:

OMDB API: You can change the OMDB API URL or add an API key if required.
<!-- How it Works -->
⚙️ How it Works
The Telegram bot listens for incoming messages from users.

When a user sends an IMDb ID to the bot, the script makes a request to the OMDB API to fetch movie details.

If the movie is found, the details (title, release date, actors, rating) are stored in the Firebase Firestore database under the "movies" collection.

The bot then responds with individual messages containing movie information.

If the movie is not found, the bot sends a "Movie not found" message to the user.

<!-- Contributing -->
🤝 Contributing
Contributions to the project are welcome! If you find any issues or have improvements to suggest, please create a pull request.

<!-- License -->
📝 License
This project is licensed under the MIT License.

<!-- Acknowledgements -->
🙏 Acknowledgements
This project utilizes the Firebase Admin SDK for Firestore interaction.
The movie details are fetched from the OMDB API (Open Movie Database).
Special thanks to the creators and maintainers of the node-telegram-bot-api package.



