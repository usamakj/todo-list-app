const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const { errorHandler } = require('./middleware/errorMiddleware');


dotenv.config();

connectDB();

const app = express();

app.use(express.json());  // ya body sa ana wala json data ko accept karta hai
app.use(express.urlencoded({ extended: false }));
app.use(cors());  // ya sub routes ko enables karta hai ha je


// app.get('/', (req, res) => {
//     res.send('API is running....');
// });
app.get('/', (req, res) => {
    res.send('API is running....');
});

app.use('/api/tasks', require('./routes/taskRoutes'));


app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running  on ${PORT}`);
});

