const express = require(`express`);
const router = express.Router();
const upload = require('../middlewares/multer');
const model = require('../models/InsertPicture');
const select = require('../models/SelectPictures');
const jsonParser = express.json();


router.route('/')
.post(upload.upload, jsonParser, (req, res) => {
  let userName = req.body['Username'];
  let Name = req.body['Name'];
  let Info = req.body['Info'];
  let Model_ID = req.body['Model_id'];
  res.status = 200;
  let r, Patch;
  upload.upload(req, res, function (err) {
    if(!req.file)
    {
      res.status = 400;
      r = {
        "status": "Нет файла"
      }
    }
  });
  Patch = req.file.path;
  model.insertPicture(Name, Info, userName, Patch, Model_ID);
  res.send(JSON.stringify(r));
});

router.route(`/:id`)
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