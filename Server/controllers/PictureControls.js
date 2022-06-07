const addPicture = require('../services/PictureService');

const postPicture = async (req, res, next) => {
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
}

module.exports = {postPicture};