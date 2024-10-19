const messagesDiv = document.getElementById("messages");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

let chatHistory = [];

function displayMessage(text, sender) {
    const messageEl = document.createElement("div");
    messageEl.classList.add("message", sender === "user" ? "user-message" : "bot-message");
    
    if (sender === "bot") {
        messageEl.innerHTML = marked.parse(text)
    }

    if (sender === "user") {
        messageEl.innerText = text;
    }

    messagesDiv.appendChild(messageEl);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

async function sendMessage() {
    const message = messageInput.value;
    if (!message) { return; }
    displayMessage(message, "user");
    messageInput.value = "";

    try {
        const response = await fetch("http://localhost:5000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: message,
                geminiChatHistory: JSON.stringify(chatHistory),
                conversationId: "1"
            })
        });
        const data = await response.json();
        if (data.success) {
            displayMessage(data.data, 'bot');
            chatHistory.push({ user: message, bot: data.data });
        } else {
            displayMessage('Error: ' + data.message, 'bot');
        }
    } catch (error) {
        displayMessage("Error connecting to chatbot", "bot");
    }
}

sendButton.addEventListener("click", sendMessage);

messageInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendMessage();
    }
});