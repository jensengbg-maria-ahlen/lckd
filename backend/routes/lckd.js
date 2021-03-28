const { Router } = require('express');
const { db } = require('./db');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const shortid = require('shortid');

const router = new Router();

router.post('/', async (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];

    try {
        const verified_user = jwt.verify(token, process.env.JWT_KEY);
        let user = db.get('users').find({ uuid: verified_user.uuid }).value();

        let DECRYPTED_USER_KEY = CryptoJS.AES.decrypt(user.userkey, process.env.SECRET).toString(CryptoJS.enc.Utf8);

        const lckd = {
            id: shortid.generate(),
            owner: CryptoJS.SHA3(user.uuid).toString(),
            username: req.body.username,
            password: CryptoJS.AES.encrypt(req.body.password, DECRYPTED_USER_KEY).toString(),
            domain: req.body.domain
        };

        db.get('lckd').push(lckd).write();

        res.sendStatus(201);
    } catch (err) {
        res.sendStatus(400);
    }
});


router.get('/', async (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];

    try {
        const verified_user = jwt.verify(token, process.env.JWT_KEY);
        const HASHED_UUID = CryptoJS.SHA3(verified_user.uuid).toString();

        let data = db.get('lckd').filter({ owner: HASHED_UUID }).value();

        let resp = data.map(lckd => {
            return {
                id: lckd.id,
                domain: lckd.domain,
                username: lckd.username,
                password: lckd.password
            }
        });

        res.send(resp);
    } catch (error) {
        res.sendStatus(400);
    }
})

module.exports = router;