# Currency Exchange API

This is a simple Node.js Express API that fetches real-time currency exchange rates and converts currency amounts using ExchangeRate-API.

## Features
- Fetch exchange rates for a given base currency.
- Convert a specified amount from one currency to another.
- Uses `ExchangeRate-API` to get real-time exchange rates.

## Requirements
- Node.js (Latest Stable Version Recommended)
- An API key from [ExchangeRate-API](https://www.exchangerate-api.com/)
- `.env` file to store your API key

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/currency-exchange-api.git
   cd currency-exchange-api
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add your API key:
   ```sh
   API_KEY=your_api_key_here
   ```

4. Start the server:
   ```sh
   node server.js
   ```

## API Endpoints

### Get Exchange Rates
#### `GET /api/rates?base=USD`
Fetches exchange rates for a given base currency (default is `USD`).

**Example Request:**
```sh
GET /api/rates?base=EUR
```

**Example Response:**
```json
{
  "base": "EUR",
  "rates": {
    "USD": 1.08,
    "GBP": 0.85,
    "INR": 89.45
  }
}
```

### Convert Currency
#### `POST /api/convert`
Converts an amount from one currency to another.

**Request Body:**
```json
{
  "from": "USD",
  "to": "EUR",
  "amount": 100
}
```

**Example Response:**
```json
{
  "from": "USD",
  "to": "EUR",
  "amount": 100,
  "convertedAmount": 94.50
}
```

## Error Handling
- Returns `400` for invalid currency codes or missing parameters.
- Returns `500` if the API request fails.

## Deployment
To deploy the application, you can use platforms like Heroku, Vercel, or Railway. Ensure that the API key is set in the environment variables.

## License
This project is licensed under the MIT License.

---
