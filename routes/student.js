const express = require('express');
const router = express.Router();

const st_model = require('../Models/students');

router.get('/getStudents', async(req, res) => {
    try {
        const students = await st_model.find({});
        res.status(200).send(students);
    } catch (err) {
        res.status(404).send(err);
    }
});

module.exports = router;