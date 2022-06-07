const express = require('express');
const model = require('../models/InsertModel');
const upload = require('../middlewares/modelMulter');
const jsonParser = express.json();


const postModel = async (upload.uploadModel, jsonParser, (req, res, next) => {
    let userName = req.body['Username'];
    let Name = req.body['Name'];
    let Info = req.body['Info'];
    res.status = 200;
    let r, Patch;
    upload.uploadModel(req, res, function (err) {
      if(!req.file)
      {
        res.status = 400;
        r = {
          "status": "Нет файла"
        }
      }
    });
    Patch = req.file.path;
    model.insertModel(Name, Info, userName, Patch);
    res.send(JSON.stringify(r));
    next;
});

module.exports = {postModel};