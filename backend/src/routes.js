const { celebrate, Joi, Segments } = require('celebrate');
const routes = require('express').Router();

const multer = require('multer');
const multerConfig = require('./config/multer')

const fs = require('fs');


const SessionController = require('./controllers/SessionController')
const ProfessoresController = require('./controllers/ProfessoresController')
const AulaController = require('./controllers/AulaController')
const ProfileController = require('./controllers/ProfileController')

const Post = require('./controllers/AulaController')

routes.post('/upload', multer(multerConfig).single("file"), (req, res) => {
    
    Post.create(req, res)

});

routes.post('/sessions', SessionController.create);

routes.get('/professores', ProfessoresController.index);

routes.post('/professores', celebrate({
    [Segments.BODY]: Joi.object().keys({ 
        name: Joi.string().required(),
        whatsapp: Joi.string().required().min(10).max(11),
    })
}), ProfessoresController.create);

routes.get('/aulas', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
        categoria: Joi.string(),
    })
}), AulaController.index);

routes.post('/aulas', AulaController.create);

routes.delete('/aulas/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), AulaController.delete);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
}), ProfileController.index);


routes.get('/video/:title', function(req, res) {
    
    title = req.params.title
    const path = '../backend/tmp/'+title+'.mp4'
    const stat = fs.statSync(path)
    const fileSize = stat.size
    const range = req.headers.range
    if (range) {
      const parts = range.replace(/bytes=/, "").split("-")
      const start = parseInt(parts[0], 10)
      const end = parts[1] 
        ? parseInt(parts[1], 10)
        : fileSize-1
      const chunksize = (end-start)+1
      const file = fs.createReadStream(path, {start, end})
      const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4',
      }
      res.writeHead(206, head);
      file.pipe(res);
    } else {
      const head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4',
      }
      res.writeHead(200, head)
      fs.createReadStream(path).pipe(res)
    }
  });

module.exports = routes;
