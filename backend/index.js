require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const auth = require('./routes/auth');
const users = require('./routes/users');
const lckd = require('./routes/lckd');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/auth', auth);
app.use('/users', users);
app.use('/lckd', lckd);


app.listen(3000, () => {
    console.log('Server is up and running on port 3000!')
});