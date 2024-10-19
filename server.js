require('dotenv').config();

const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

function SimplifyGeminiData(text) {
    return text.trim();
}

const GeminiChatbot = async (req,res) => {
    try {
       let { message, geminiChatHistory, conversationId } = req.body;

       const history = JSON.parse(geminiChatHistory || "[]");
       if (history.length) { history.pop(); }

       const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
       const chat = model.startChat({
           history: history,
           settings: { temperature: 0 }
       });

       const format = "TEXT_REPONSE_FORMAT";
       const result = await chat.sendMessage(message + format);
       const response = await result.response;
       const text = response.text();
       const data = SimplifyGeminiData(text);

       return res.status(200).json({
           success: true,
           data,
           conversationId
       })

   } catch (error) {
       console.log(error);
       return res.status(500).json({ success: false, message: error.message });
   }
};

app.post("/chat", GeminiChatbot);

const PORT = 5000;
app.listen(PORT, () => console.log("server is running on port " + PORT));