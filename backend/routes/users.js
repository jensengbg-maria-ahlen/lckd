const { Router } = require('express');
const { db } = require('./db');
const shortid = require('shortid');
const bcrypt = require('bcrypt');
const CryptoJS = require('crypto-js');
const router = new Router();

router.post('/', async (req, res) => {
    if (req.body.username && req.body.password) {
        const HASHED_PW = await bcrypt.hash(req.body.password, 10);
        
        const USER_KEY = shortid.generate();
        const ENCRYPTED_USER_KEY = CryptoJS.AES.encrypt(USER_KEY, process.env.SECRET).toString();

        let user = {
            uuid: shortid.generate(),
            username: req.body.username,
            password: HASHED_PW,
            userkey: ENCRYPTED_USER_KEY
        };

        db.get('users').push(user).write();

        res.status(201).send('User created');
    } else {
        res.status(400).end('Whoops! Did you really entered the credentials correctly?');
    }

    const credentials = req.body;
    res.send(credentials);
});

module.exports = router;