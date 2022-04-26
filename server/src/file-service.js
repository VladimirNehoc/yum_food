const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

module.exports = (app) => {
  const storage = multer.diskStorage({
    destination(req, file, callback) {
      callback(null, 'src/uploads/');
    },

    // By default, multer removes file extensions so let's add them back
    filename(req, file, callback) {
      const uuid = uuidv4();

      callback(null, `${uuid}${path.extname(file.originalname).toLowerCase()}`);
    },
  });

  const imageFilter = (req, file, callback) => {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG)$/)) {
      req.fileValidationError = 'Разрешено загружать только изображения формата .jpg или .png';

      return callback(new Error('Разрешено загружать только изображения формата .jpg или .png'), false);
    }

    callback(null, true);

    return true;
  };

  app.post('/image-upload', (req, res) => {
    const upload = multer({
      storage,
      fileFilter: imageFilter,
    }).single('file');

    upload(req, res, (err) => {
      // req.file contains information of uploaded file
      // req.body contains information of text fields, if there were any

      if (req.fileValidationError) {
        return res.send(req.fileValidationError);
      } if (!req.file) {
        return res.send('Не выбрано изображение для загрузки');
      } if (err instanceof multer.MulterError) {
        return res.send(err);
      } if (err) {
        return res.send(err);
      }

      // Display uploaded image for user validation
      res.send(req.file);
    });
  });

  app.get('/image-upload/:imagePath', (req, res) => {
    res.sendFile(`${__dirname}/uploads/${req.params.imagePath}`);
  });
};
