import express from 'express';
import dotenv from 'dotenv';
import request from 'request';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

const makeRequestToGoogle = () => {
    request('https://blog-fullstack-v4zf.onrender.com', (err, response, body) => {
        if (err) {
            console.error('Error:', err);
        } else {
            console.log('Blog Fullstack is ready!');
        }
    });
};

makeRequestToGoogle();

setInterval(makeRequestToGoogle, 300000);

app.get('/', (req, res) => {
    res.send('Server is ready!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});