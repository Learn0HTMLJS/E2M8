const express = require('express');
//const { json } = require('express/lib/response');
const router = express.Router();
const upload = require('../middlewares/modelMulter');
const model = require('../models/InsertModel');
const select = require('../models/SelectModel');
const update = require('../models/EditModel');
const del = require('../models/DeleteModel');
const jsonParser = express.json();

router.route('/')
  .post(upload.uploadModel, jsonParser, (req, res) => { 
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
        res.send(JSON.stringify(r));
        return;
      }
    });
    Patch = req.file.filename;
/*    console.log(Patch);
    let sz = req.file.path.length;
    console.log(req.file.path);
    Patch = Patch.slice(sz-1);
    console.log(Patch);*/
    r = model.insertModel(Name, Info, userName, Patch).then(result =>{   
      res.send(JSON.stringify(result[0]));
    });    
  })
  .get((req, res) => {
    let r = select.selectModels().then(resul =>{
      //console.log(resul);
      res.send(JSON.stringify(resul));
    });
  });

router.route('/:id')
  .get((req, res) => {
    let num = req.url.slice(2, this.length);   
    let r = select.selectModel(num).then(resul =>{
      //console.log(resul);
      if(!resul)
      {
        res.status = 404;
        rt = {
          "status": "Ошибка чтения"
        }
        res.send(JSON.stringify(rt));
      }
      res.send(resul[0]);
    });
  })
  .put((req, res) => {
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
        res.send(JSON.stringify(r));
        return;
      }
    });
    Patch = req.file.filename;
    let num = req.url.slice(2, this.length);   
    r = update.editModel(num, Name, Info, userName, Patch).then(result =>{   
      res.send(JSON.stringify(result[0]));
    });  
  })
  .delete((req, res) => {
    let num = req.url.slice(2, this.length);      
    let r = del.deleteModel(num).then(resul =>{
      res.send(JSON.stringify(resul));
    });
  });

module.exports = router;  