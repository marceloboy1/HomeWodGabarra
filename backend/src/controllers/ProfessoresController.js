const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');
module.exports = {


    async index(request, response) {
        const professores = await connection('professores').select('*');
    
        return response.json(professores);
    },

    async create(request, response){
        const { name, whatsapp} = request.body;

        const id = generateUniqueId();

        await connection('professores').insert({
            id,
            name,
            whatsapp,
        })

        return response.json({ id });
    
    }

}