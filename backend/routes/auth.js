const { Router } = require('express');
const { db } = require('./db');
const bcrypt = require('bcrypt');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const router = new Router();

router.post('/', async (req, res) => {
    const credentials = req.body;
    res.send(credentials);
});


router.post('/login', async (req, res) => {
    let userExist = db.get('users').find({ username: req.body.username }).value();

    if (userExist) {
        const validPass = await bcrypt.compare(req.body.password, userExist.password);

        if (validPass) {
            const bytes = CryptoJS.AES.decrypt(userExist.userkey, process.env.SECRET);
            const DECRYPTED_USER_KEY = bytes.toString(CryptoJS.enc.Utf8);
            
            const token = jwt.sign({uuid: userExist.uuid}, process.env.JWT_KEY);
            
            res.status(200).send({ 
                token: token, 
                userkey: DECRYPTED_USER_KEY
            });

        } else {
            res.status(403).end('No data for you');
        }  
    } else {
        res.status(404).end('Not found');
    }

});

module.exports = router;