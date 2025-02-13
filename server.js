require("dotenv").config();
const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const axios = require("axios");

const app = express();
app.use(express.json());

const API_KEY = process.env.API_KEY;

const getExchangeRates = async (base = "USD") => {
  const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${base}`;
  const response = await axios.get(url);
  return response.data.conversion_rates;
};

app.get("/api/rates", async (req, res) => {
  try {
    const base = req.query.base || "USD";
    const rates = await getExchangeRates(base);
    res.json({ base, rates });
  } catch {
    res.status(500).json({ error: "Failed to fetch exchange rates" });
  }
});

app.post("/api/convert", async (req, res) => {
  try {
    const { from, to, amount } = req.body;
    if (!from || !to || !amount)
      return res.status(400).json({ error: "Invalid input" });

    const rates = await getExchangeRates(from);
    if (!rates[to])
      return res.status(400).json({ error: "Invalid currency code" });

    res.json({
      from,
      to,
      amount,
      convertedAmount: (amount * rates[to]).toFixed(2),
    });
  } catch {
    res.status(500).json({ error: "Conversion failed" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));

module.exports = app;
