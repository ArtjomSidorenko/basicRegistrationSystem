
const express = require('express');
const router = express.Router();
const registrationSystem = require('../services/system');

/* GET todos. */

router.post('/login', async function(req, res, next) {
    console.log('POST request /api/basicRegistrationSystem/login received with parameters: ' + JSON.stringify(req.body));

    try {
        const result = await registrationSystem.login(req.body);

        res.json(result);
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        next(err);
    }
});

router.post('/register', async function(req, res, next) {
    console.log('POST request /api/basicRegistrationSystem/register received with parameters: ' + JSON.stringify(req.body));

    try {
        const result = await registrationSystem.register(req.body);

        res.json(result);
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        next(err);
    }
});

router.post('/data/deleting', async function(req, res, next) {
    console.log('POST request /api/todo/deleting received with parameters: ' + JSON.stringify(req.body));

    try {
        const result1 = await registrationSystem.deleting(req.body);

        res.json(result1);
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        next(err);
    }
});

router.get('/system', async function(req, res, next) {
    console.log('GET request /api/gettingRegistrationSystem received');

    try {
        const result = await registrationSystem.getUsers();

        console.log(result);
        res.json(result);
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        next(err);
    }
});

module.exports = router;

