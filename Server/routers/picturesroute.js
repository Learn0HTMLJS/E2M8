const express = require(`express`);
const router = express.Router();
const upload = require('../middlewares/multer');
const model = require('../models/InsertPicture');
const select = require('../models/SelectPictures');
const jsonParser = express.json();

router.route(`/:id`)
.post(upload.upload, jsonParser, (req, res) => {
  let num = req.url.slice(2, this.length);
  let userName = req.body['Username'];
  let Picture = req.body['Picture'];
  let Info = req.body['Info'];
//  let Model_ID = req.body['Model_id'];
console.log(req.body);
  res.status = 200;
  let r, Patch;
  upload.upload(req, res, function (err) {
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
  model.insertPicture(Info, userName, Patch, num).then(result => {
    r = result;
  });
//  res.send(JSON.stringify(r));
})
  .get((req, res) => {
    let num = req.url.slice(2, this.length);
    let r = select.selectPicture(num).then(resul =>{
      console.log(resul);
      res.send(resul[0]);
    });
  })
  .put((req, res) => {
    res.send(`<h1>put ID ${req.url} картинки</h1>`);
    console.log('Запрос!!!!!!!!!!!');
  })
  .delete((req, res) => {
    res.send(`<h1>delete ID ${req.url} картинки</h1>`);
    console.log('Запрос!!!!!!!!!!!');
  });


module.exports = router;  