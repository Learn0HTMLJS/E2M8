const express = require('express');
const cors = require('cors');
const multer = require('multer');
const app = express();
app.use(cors());

const storage = multer.diskStorage({
  destination: function(req, res, cb){
    cb(null, 'Server/static')
  },
  filename: function(req, file, cb){
    cb(null, file.originalname + Date.now())
  }
})

const fileFilter = (req, file, cb) => {
  if(file.mimetype === "image/png" || 
  file.mimetype === "image/jpg"|| 
  file.mimetype === "image/jpeg"){
      cb(null, true);
  }
  else{
      cb(null, false);
  }
}

app.use('/styles', express.static(`static`));
const upload = multer({storage: storage, fileFilter: fileFilter}).single('Picture');

app.post('/', upload, function (request, response) {
  let filedata = request.file;
  if(!filedata)
  {
    response.statusCode = 400;
    let r = {
      'error': 'Не тот тип файла'
    }
    response.send(JSON.stringify(r));
  }
  else
  {
    response.statusCode = 200;
    console.log(filedata);
    let r = {
      'error': 'всё ОК'
    }
    response.send(JSON.stringify(r));
  }
  console.log(`подключен`);
});

app.get('/', function (request, response) {
  response.send('<h2>Привет Express!</h2>');
  console.log(`подключен`);
});

app.listen(3000, '127.0.0.1', () => {
  console.log('порт 3000');
});
