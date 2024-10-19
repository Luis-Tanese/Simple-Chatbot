# About
This project was created for fun and to explore how APIs work. It demonstrates a simple chatbot using Node.js, OpenAI's Gemini API, and other helpful tools. Follow the instructions below to set it up and start chatting.

## Setup
### Prerequisites
Make sure you have the following installed on your computer:
[´Node.js]~(https://nodejs.org/) (version 14 or higher recommended)

### Step-by-Step Guide
### 1. Create the Project Folder
Open your terminal and create a folder for the project:
```bash
mkdir Chatbot
```
Navigate into the new folder:
```bash
cd Chatbot
```

### 2. Initialize Node.js
Inside the project folder, initialize a new Node.js project with:
```bash
npm init -y
```

### 3. Install Required Dependencies
Install the necessary Node.js modules by running the following command:
```bash
npm install axios @openai/gemini express dotenv
```

### 4. Setup Environment Variables
Create a `.env` file in the project root directory and add your API key:
```bash
API_KEY="YOUR_API_KEY_HERE"
```
Replace YOUR_API_KEY_HERE with your actual API key, which you can obtain from [this link](https://aistudio.google.com/app/apikey).

### 5. Add the Project Files
Copy all the files from this repository into the root of your project folder.

### 6. Run the server
To start the server, run:
```bash
node server.js
```

### 7. Open the Chatbot
After running the server, open the corresponding HTML file in your browser to start chatting with the bot.
