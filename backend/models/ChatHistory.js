const mongoose = require("mongoose");

// Chat History Schema

const ChatHistorySchema = mongoose.Schema({
  username: String,
  message: String,
  timestamp: Date,
});

const ChatHistory = mongoose.model("ChatHistory", ChatHistorySchema);

module.exports = ChatHistory;
