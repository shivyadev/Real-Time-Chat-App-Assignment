const http = require("http");
const WebSocket = require("ws");
const dotenv = require("dotenv");
const connectDB = require("./db/connectDB");
const ChatHistory = require("./models/ChatHistory");
const convertTime = require("./utils");

// WebSocket Server Setup
const server = http.createServer();
const wss = new WebSocket.Server({ server });

dotenv.config();

wss.on("connection", async (ws) => {
  console.log("Client connected");
  console.log("Total clients:", wss.clients.size);

  // Fetching the previous chat history and sending them back to client
  const history = await ChatHistory.find()
    .sort({ timestamp: -1 })
    .limit(50)
    .lean();

  ws.send(
    JSON.stringify({
      type: "history",
      messageInfo: history.reverse().map((msg) => ({
        ...msg,
        displayTime: convertTime(msg.timestamp),
      })),
    })
  );

  ws.on("message", async (data) => {
    const { username, message } = JSON.parse(data);

    console.log("Received message:", message);

    // Receiving the message sent from the client/frontend and broadcasting to all active client
    const messageToSend = {
      username: username,
      message: message,
      timestamp: new Date(),
    };

    const chat = new ChatHistory(messageToSend);
    await chat.save();

    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(
          JSON.stringify({
            type: "message",
            messageInfo: {
              ...messageToSend,
              displayTime: convertTime(messageToSend.timestamp),
            },
          })
        );
      }
    });
  });

  ws.on("close", () => {
    console.log("Client disconnected");
    console.log("Remaining clients:", wss.clients.size);
  });
});

// Connecting with Database and starting the server
connectDB();
const PORT = process.env.PORT | 5000;
server.listen(PORT, () => console.log("Server Running"));
