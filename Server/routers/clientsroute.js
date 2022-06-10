const express = require('express');
const router = express.Router();

const pages = app.use('/' ,express.static('Client'));

router.route('/')
.get((req, res) => {
    res.redirect('../../Clients/');
})