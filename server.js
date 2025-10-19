require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');

const contactRoute = require('./routes/contact'); // singular file contact.js
const userRoute = require('./routes/user');

const app = express();

console.log('typeof contactRoute:', typeof contactRoute, contactRoute);
console.log('typeof userRoute:', typeof userRoute, userRoute);

app.use(cors());
app.use(express.json());


connectDB();


app.get('/', (_req, res) => {
  res.status(200).json({ message: 'Welcome to My Portfolio application.' });
});



app.get('/ping', (_req, res) => res.json({ ok: true }));

app.use('/api/contact', contactRoute);
app.use('/api/user', userRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`));