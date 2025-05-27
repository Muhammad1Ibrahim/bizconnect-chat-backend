const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

// Dummy messages
let messages = [
  { sender: "user", text: "Hello, I need help with my business." },
  { sender: "admin", text: "Sure! What service are you interested in?" },
];

// Route to get chat messages
app.get("/api/messages", (req, res) => {
  res.json(messages);
});

// Optional: Route to post a new message (if needed)
app.post("/api/messages", (req, res) => {
  const { sender, text } = req.body;
  if (sender && text) {
    messages.push({ sender, text });
    res.status(201).json({ success: true });
  } else {
    res.status(400).json({ error: "Missing sender or text" });
  }
});

app.listen(PORT, () => {
  console.log(`Chat backend running at http://localhost:${PORT}`);
});
