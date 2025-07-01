const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const dotenv = require("dotenv");
const connectDB = require("./db/connectDB");
const ChatHistory = require("./models/ChatHistory");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

dotenv.config();

wss.on("connection", (ws) => {
  console.log("Client connected");
  console.log("Total clients:", wss.clients.size);

  ws.on("message", (data) => {
    const { username, message } = JSON.parse(data);

    console.log("Received message:", message);

    const messageToSend = {
      username: username,
      message: message,
      timestamp: new Date().toLocaleTimeString("en-us", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    };

    const chat = new ChatHistory(messageToSend);
    chat.save();

    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(messageToSend));
      }
    });
  });

  ws.on("close", () => {
    console.log("Client disconnected");
    console.log("Remaining clients:", wss.clients.size);
  });
});

const connect = async () => {
  await connectDB();
};

connect();
const PORT = process.env.PORT | 5000;
server.listen(PORT, () => console.log("Server Running"));
