const express = require(`express`);
const router = express.Router();

router.all(`/`, (req, res) =>{
  console.log('Запрос!!!!!!!!!!!');
  res.send(`<h1>Таблица тегов</h1>`)
});

router.route(`/`)
.post((req, res) => {
  res.send(`<h1>post ID тега</h1>`)
});

router.route(`/:id`)
  .get((req, res) => {
    res.send(`<h1>get ID ${req.url} тега</h1>`);
    console.log('Запрос!!!!!!!!!!!');
  })
  .put((req, res) => {
    res.send(`<h1>put ID ${req.url} тега</h1>`);
    console.log('Запрос!!!!!!!!!!!');
  })
  .delete((req, res) => {
    res.send(`<h1>delete ID ${req.url} тега</h1>`);
    console.log('Запрос!!!!!!!!!!!');
  });

module.exports = router;  