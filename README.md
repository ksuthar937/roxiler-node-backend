# Backend Task

## Overview

This project provides a set of APIs to interact with product transactions data fetched from a third-party API. The APIs support various functionalities including initializing the database, listing transactions with search and pagination, generating statistics, and creating data visualizations such as bar charts and pie charts.

## Technologies

- Node JS
- Express JS
- Mongo DB

## Data Source

- **THIRD PARTY API URL**: `https://s3.amazonaws.com/roxiler.com/product_transaction.json`
- **REQUEST METHOD**: GET
- **RESPONSE FORMAT**: JSON

## APIs

### 1. Initialize Database

**Endpoint**: `/products`

**Method**: GET

**Description**: Fetches JSON data from the third-party API and initializes the database with seed data.

### 2. List All Transactions

**Endpoint**: `/transactions`

**Method**: GET

**Description**: Lists all transactions with support for search and pagination.

**Query Parameters**:

- `month`: The month for filtering transactions (expected value: any month between January to December).
- `search`: Search text to match against product title, description, or price.
- `pageNo`: Page number for pagination (default: 1).
- `perPage`: Number of records per page for pagination (default: 10).

### 3. Statistics

**Endpoint**: `/statistics`

**Method**: GET

**Description**: Provides statistics for the selected month.

**Query Parameters**:

- `month`: The month for filtering transactions (expected value: any month between January to December).

**Response**:

- `totalSale`: Total sale amount of the selected month.
- `totalSoldItem`: Total number of sold items of the selected month.
- `totalUnSoldItem`: Total number of not sold items of the selected month.

### 4. Bar Chart Data

**Endpoint**: `/chart/bar`

**Method**: GET

**Description**: Provides data for a bar chart showing price ranges and the number of items in each range for the selected month.

**Query Parameters**:

- `month`: The month for filtering transactions (expected value: any month between January to December).

**Response**:

- `0-100`
- `101-200`
- `201-300`
- `301-400`
- `401-500`
- `501-600`
- `601-700`
- `701-800`
- `801-900`
- `901-above`

### 5. Pie Chart Data

**Endpoint**: `/chart/pie`

**Method**: GET

**Description**: Provides data for a pie chart showing unique categories and the number of items in each category for the selected month.

**Query Parameters**:

- `month`: The month for filtering transactions (expected value: any month between January to December).

**Response**:

- `{category}: {count}` (e.g., `electronics: 2`)

### 6. Combined Data

**Endpoint**: `/combined`

**Method**: GET

**Description**: Fetches data from the statistics, bar chart, and pie chart APIs, combines the responses, and sends a final response of the combined JSON.

**Query Parameters**:

- `month`: The month for filtering transactions (expected value: any month between January to December).

**Response**:

- `barData`: Data for the bar chart.
- `pieData`: Data for the pie chart.
- `statsData`: Statistics data.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/backend-task.git
   cd backend-task
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:

   ```
   PORT=4000
   BASE_URL=http://localhost:4000
   THIRD_PARTY_API_URL=https://s3.amazonaws.com/roxiler.com/product_transaction.json
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. The server will run on `http://localhost:4000`.
