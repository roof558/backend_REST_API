import express from 'express';
import dotenv from 'dotenv';

// async function for future process
async function start() {

    // Load environment variables
    dotenv.config({
        path: "./.env",
    });

    // Create new express application
    const app = express();

    app.get('/', (req, res) => {
        res.send('Hello');
    });

    app.listen(process.env.HTTP_PORT, () => {
        console.log('Server Connect');
    });
}

start();