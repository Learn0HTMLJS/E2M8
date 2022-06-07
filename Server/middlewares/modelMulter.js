const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, res, cb){
    cb(null, 'Server/static/Models')
  },
  filename: function(req, file, cb){
    cb(null, file.originalname + Date.now())
  }
});
  
const fileFilter = (req, file, cb) => {
  if(file.mimetype === "stl" ){
    cb(null, true);
  }
  else{
    cb(null, false);
  }
}
  
//app.use('/styles', express.static(`static`));
const uploadModel = multer({storage: storage}).single('Model');
   
module.exports = {uploadModel};