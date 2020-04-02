const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {

    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    })

    afterAll(async()=>{
        await connection.destroy();
    })
    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        
        //usa .set para setar alguma informação vinda do header
        
        .send({
            name: "Marcelo",
            email: "Marcelo@dsf.com",
            whatsapp: "16991186056",
            city: "Ribeirao Preto",
            uf: "SP"
        });
    
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);

    });
})