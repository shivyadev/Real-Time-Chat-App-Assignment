const mongoose = require("mongoose");

const ChatHistorySchema = mongoose.Schema({
  username: String,
  message: String,
  timestamp: Date,
});

const ChatHistory = mongoose.model("ChatHistory", ChatHistorySchema);

module.exports = ChatHistory;
