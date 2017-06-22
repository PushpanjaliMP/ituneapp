
var multer = require('multer');
//const upload = multer({ dest: 'temp'})
 const storage = multer.diskStorage({
     destination: function(req,file,cb) {
      cb(null,'temp/')
     },
     filename(req,file,cb) {
         cb(null,`${new Date()} - ${file.originalname}`);
     },
 });

const upload = multer({storage:storage});
