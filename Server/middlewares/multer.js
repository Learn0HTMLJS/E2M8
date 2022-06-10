const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, res, cb){
      cb(null, 'Server/static')
    },
    filename: function(req, file, cb){
      cb(null, Date.now()+file.originalname)
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
  
  //app.use('/styles', express.static(`static`));
  const upload = multer({storage: storage, fileFilter: fileFilter}).single('Picture');
    
  module.exports = {upload};