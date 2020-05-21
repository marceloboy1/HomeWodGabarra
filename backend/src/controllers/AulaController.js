const connection = require('../database/connection');
const multer = require('../config/multer')

module.exports = {

    async index(request, response) {
        
        const { page = 1 } = request.query;

        const { categoria } = request.query;
        console.log(categoria)

        const [count] = await connection('aulas').count().where('categoria', categoria);

        const aulas = await connection('aulas')
        .limit(5)
        .offset((page -1) * 5)
        .where('categoria', categoria)
        .select(['aulas.*']);

        response.header('X-Total-Count', count['count(*)'])
        
        return response.json(aulas);

    },
  
    async create(request, response){
        
        
        const { title, description, categoria} = request.body;
        const professor_id = request.headers.authorization;
        const url = "../../tmp"
        const [id] = await connection('aulas').insert({
            title,
            description,
            // intensidade,
            categoria,
            professor_id,
            url,
        });
        console.log("ENTRADA CRIADA COM SUCESSO")
        return response.json({ url, title});
    },

    async delete(request, response){

        const { id } = request.params;
        const professor_id = request.headers.authorization;


        const aula = await connection('aulas')
            .where('id', id)
            .select('professor_id')
            .first();

        if (aula.professor_id != professor_id) {

            return response.status(401).json({error: 'Operação nao permitida'});
        }

        await connection('aulas').where('id', id).delete();

        return response.status(204).send();

    }

}