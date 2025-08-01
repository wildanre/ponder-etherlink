# API Documentation

## Overview
This document provides an overview of all the API endpoints available in the project. Each endpoint is described with its HTTP method, URL, parameters, and a brief description of its functionality.

---

## Endpoints

### Activities

#### GET `/activities`
- **Description**: Get all activities (paginated).
- **Query Parameters**:
  - `limit` (optional): Number of activities to fetch (default: 50).
  - `offset` (optional): Offset for pagination (default: 0).
  - `type` (optional): Filter by activity type.
- **Response**: Returns a list of activities with pagination details.

#### GET `/activities/user/:userAddress`
- **Description**: Get activities for a specific user.
- **Path Parameters**:
  - `userAddress`: Address of the user.
- **Query Parameters**:
  - `limit` (optional): Number of activities to fetch (default: 50).
  - `offset` (optional): Offset for pagination (default: 0).
- **Response**: Returns a list of user-specific activities.

---

### Pools

#### GET `/pools`
- **Description**: Get all lending pools.
- **Response**: Returns a list of all lending pools.

#### GET `/pools/:poolAddress`
- **Description**: Get details of a specific pool.
- **Path Parameters**:
  - `poolAddress`: Address of the pool.
- **Response**: Returns details of the specified pool.

#### GET `/pools/:poolAddress/activities`
- **Description**: Get activities for a specific pool.
- **Path Parameters**:
  - `poolAddress`: Address of the pool.
- **Response**: Returns a list of activities for the specified pool.

#### GET `/pools/:poolAddress/positions`
- **Description**: Get positions for a specific pool.
- **Path Parameters**:
  - `poolAddress`: Address of the pool.
- **Response**: Returns a list of positions for the specified pool.

#### POST `/pools/search`
- **Description**: Search pools with advanced filters.
- **Request Body**:
  - `collateralToken` (optional): Filter by collateral token.
  - `borrowToken` (optional): Filter by borrow token.
  - `minLtv` (optional): Minimum loan-to-value ratio.
  - `maxLtv` (optional): Maximum loan-to-value ratio.
  - `limit` (optional): Number of pools to fetch (default: 50).
  - `offset` (optional): Offset for pagination (default: 0).
- **Response**: Returns a list of pools matching the filters.

---

### Positions

#### GET `/positions`
- **Description**: Get all positions.
- **Response**: Returns a list of all positions.

#### GET `/positions/user/:userAddress`
- **Description**: Get positions for a specific user.
- **Path Parameters**:
  - `userAddress`: Address of the user.
- **Response**: Returns a list of positions for the specified user.

#### GET `/positions/:positionId`
- **Description**: Get details of a specific position.
- **Path Parameters**:
  - `positionId`: ID of the position.
- **Response**: Returns details of the specified position.

#### POST `/positions/health-check`
- **Description**: Check health scores of positions.
- **Request Body**:
  - `positionIds`: Array of position IDs to check.
- **Response**: Returns health scores for the specified positions.

---

### Stats

#### GET `/stats/overview`
- **Description**: Get overall protocol statistics.
- **Response**: Returns an overview of protocol statistics.

#### GET `/stats/pools`
- **Description**: Get statistics for all pools.
- **Response**: Returns statistics for all pools.

#### POST `/stats/historical`
- **Description**: Get historical statistics.
- **Request Body**:
  - `timeframe`: Timeframe for statistics (e.g., `7d`, `30d`).
  - `interval`: Interval for data points (e.g., `1d`, `1h`).
  - `metrics`: Array of metrics to include (e.g., `volume`, `users`).
- **Response**: Returns historical statistics based on the specified parameters.

---

### Tokens

#### GET `/tokens`
- **Description**: Get information about common tokens.
- **Response**: Returns a list of common tokens.

#### GET `/tokens/:tokenAddress`
- **Description**: Get information about a specific token.
- **Path Parameters**:
  - `tokenAddress`: Address of the token.
- **Response**: Returns details of the specified token.

#### POST `/tokens/metadata`
- **Description**: Get metadata for multiple tokens.
- **Request Body**:
  - `addresses`: Array of token addresses.
- **Response**: Returns metadata for the specified tokens.

---

### Users

#### GET `/users/:userAddress`
- **Description**: Get profile and summary of a user.
- **Path Parameters**:
  - `userAddress`: Address of the user.
- **Response**: Returns profile and summary of the specified user.

#### POST `/users/leaderboard`
- **Description**: Get user leaderboard.
- **Request Body**:
  - `sortBy`: Criteria to sort leaderboard (e.g., `totalVolume`).
  - `timeframe`: Timeframe for leaderboard (e.g., `30d`).
  - `limit`: Number of users to fetch (default: 100).
- **Response**: Returns a leaderboard of users based on the specified criteria.

---

### Webhooks

#### POST `/webhooks/transaction`
- **Description**: Handle transaction notifications.
- **Request Body**:
  - `txHash`: Transaction hash.
  - `type`: Type of transaction.
  - `userAddress`: Address of the user.
  - `poolAddress` (optional): Address of the pool.
  - `amount` (optional): Amount involved in the transaction.
  - `status` (optional): Status of the transaction (default: `pending`).
- **Response**: Acknowledges the webhook and returns the processed data.

#### POST `/webhooks/price-alert`
- **Description**: Handle price alert notifications.
- **Request Body**:
  - `userAddress`: Address of the user.
  - `tokenAddress`: Address of the token.
  - `alertType`: Type of alert (`above`, `below`).
  - `targetPrice`: Target price for the alert.
  - `currentPrice`: Current price of the token.
- **Response**: Acknowledges the webhook and returns the processed data.

#### POST `/webhooks/liquidation-warning`
- **Description**: Handle liquidation warning notifications.
- **Request Body**:
  - `userAddress`: Address of the user.
  - `positionId`: ID of the position.
  - `healthScore`: Health score of the position.
  - `warningLevel`: Level of warning (`warning`, `critical`).
- **Response**: Acknowledges the webhook and returns the processed data.

---

## Notes
- All endpoints return JSON responses.
- Error responses include an `error` field with a message describing the issue.
