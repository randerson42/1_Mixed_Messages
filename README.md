# Form Data Application

A full stack web application that collects form data and stores it in a MongoDB database.

## Features

- Modern, responsive UI
- Form data collection
- Real-time data display
- MongoDB database storage
- Form validation
- Success/error notifications

## Prerequisites

- Node.js (v14 or higher)
- MongoDB installed locally or a MongoDB Atlas account
- npm or yarn package manager

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   ```
4. Start MongoDB (if using local installation)
5. Start the application:
   ```bash
   npm start
   ```
   For development with auto-reload:
   ```bash
   npm run dev
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Fill out the form with your information
3. Submit the form to save the data
4. View all submitted data in the grid below the form

## Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- Database: MongoDB
- Additional: dotenv, cors, body-parser