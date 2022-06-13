const express = require('express');
const router = express.Router();
const comment = require('../models/InsertComment');
const select = require('../models/SelectComments');
const upload = require('../middlewares/modelMulter');
const jsonParser2 = express.json();

router.route('/')
  .post(upload.uploadModel, jsonParser2, (req, res) => { 
    let Model_id = req.body['model_id'];
    let text = req.body['comment'];
    let r;
    //console.log(Model_id);
    res.status = 400;
    if(Model_id == undefined || text == undefined)
    {
      r = {
        'message': 'error'
      };
      res.send(JSON.stringify(r));
      return;
    }
    else
    {
      res.status = 200;
      r = comment.insertComment(Model_id, text).then(result =>{   
        res.send(JSON.stringify(result));
      });   
    } 
});

router.route('/:id')
  .get((req, res) => {
    let num = req.url.slice(2, this.length);  
    console.log(num);
    let r = select.selectComments(num).then(resul =>{
        //console.log(resul);
        res.send(JSON.stringify(resul));
    });
  })
  .put((req, res) => {
    res.send(`<h1>put ID ${req.url} модели</h1>`);
    console.log('Запрос!!!!!!!!!!!');
  })
  .delete((req, res) => {
    res.send(`<h1>delete ID ${req.url} модели</h1>`);
    console.log('Запрос!!!!!!!!!!!');
  });

module.exports = router;  