const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use('/img', express.static(`Server/static`));
app.use('/models', express.static(`Server/static/Models`));
const pages = app.use('/' ,express.static('Client'));

const models = require('./routers/modelsroute');
app.use('/api/models', models);

const pictures = require('./routers/picturesroute');
app.use('/api/pictures', pictures);

const tags = require('./routers/tagsroute');
app.use('/api/tags', tags);

const comments = require('./routers/commentsroute');
app.use('/api/comments', comments);

/*app.post('/', upload, function (request, response) {
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
});*/

app.get('/', function (request, response) {
  response.send('<h2>Привет Express!</h2>');
  console.log(`подключен`);
});

app.listen(3000, '127.0.0.1', () => {
  console.log('порт 3000');
});

