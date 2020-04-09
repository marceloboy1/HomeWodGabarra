const { celebrate, Joi, Segments } = require('celebrate');
const routes = require('express').Router();

const multer = require('multer');
const multerConfig = require('./config/multer')

const SessionController = require('./controllers/SessionController')
const ProfessoresController = require('./controllers/ProfessoresController')
const AulaController = require('./controllers/AulaController')
const ProfileController = require('./controllers/ProfileController')

const Post = require('./controllers/AulaController')

routes.post("/upload", multer(multerConfig).single("file"), (req, res) => {
    
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


module.exports = routes;
