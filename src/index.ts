import express from 'express';
import dotenv from 'dotenv';
import request from 'request';

const app = express();
dotenv.config();

const PORT = process.env || 5000;

const makeRequestToGoogle = () => {
    request('https://blog-fullstack-v4zf.onrender.com', (err:any, response:any, body:any) => {
        if (err) {
            console.error('Error:', err);
        } else {
            console.log('Blog Fullstack is ready!');
        }
    });
};

function getRandomInterval(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startRandomInterval() {
    const minInterval = 2 * 60 * 1000; // 2 minutes in milliseconds
    const maxInterval = 5 * 60 * 1000; // 5 minutes in milliseconds

    const interval = getRandomInterval(minInterval, maxInterval);

    console.log(`Next request will be made in ${interval / 1000} seconds`);

    makeRequestToGoogle(); // Make the initial request

    setInterval(() => {
        makeRequestToGoogle();
        const newInterval = getRandomInterval(minInterval, maxInterval);
        console.log(`Next request will be made in ${newInterval / 1000} seconds`);
    }, interval);
}

startRandomInterval();

app.get('/', (req, res) => {
    res.send('Server is ready!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});