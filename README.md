# Card Number Validation API

A simple NestJS API endpoint to validate credit card numbers using the Luhn algorithm.

## Requirements

- Node.js
- npm

## Installation

1. Clone the repository
2. Run `npm install`

## Running the Application

```bash
npm run build
npm start
```

The server will start on port 3000.

## API Endpoint

### POST /validate

Validates a credit card number.

**Request Body:**
```json
{
  "cardNumber": "4532015112830366"
}
```

**Response:**
```json
{
  "valid": true
}
```

**Error Response (400 Bad Request):**
```json
{
  "statusCode": 400,
  "message": "cardNumber is required",
  "error": "Bad Request"
}
```

## Validation Logic

The endpoint uses the Luhn algorithm to check if the card number is valid. It also cleans the input by removing spaces and dashes, and ensures the input consists only of digits.

## Testing

Run the tests with:

```bash
npm test
```

## Decisions Made

- **Framework:** Chose NestJS for its structured approach to building APIs with TypeScript.
- **Validation Algorithm:** Implemented the Luhn algorithm, which is standard for credit card validation.
- **Input Handling:** Accepts card numbers with spaces or dashes, cleans them, and validates only numeric strings.
- **Error Handling:** Returns 400 for missing cardNumber field.
- **Response Shape:** Simple JSON with a "valid" boolean.
- **Testing:** Unit tests for the service method covering valid/invalid numbers, non-numeric input, and formatting.