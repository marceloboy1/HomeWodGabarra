const connection = require('../database/connection');

module.exports = {

    async create(request, response) {

        const { id }  = request.body;
        
        const professor = await connection('professores')
            .where('id', id)
            .select('name')
            .first();

        if (!professor) {
            return response.status(400).json({error: "ID inválido"});

        }

        return response.json(professor);
    }

}