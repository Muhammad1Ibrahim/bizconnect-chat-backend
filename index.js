const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());

const analytics = {
  totalSales: 150,
  totalVisitors: 1200,
  topProduct: "Organic Coffee Beans",
  monthlySales: [10, 20, 30, 50, 60, 80, 90, 100, 110, 120, 130, 150],
};

app.get("/api/analytics", (req, res) => {
  res.json(analytics);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
