const connection = require('../database/connection');
const multer = require('../config/multer')
const fs = require('fs');

module.exports = {

    async loadVideo(req, res) {
        
        const intensidade = req.params.intensidade
        const categoria = req.params.categoria
        // console.log("Categoria")
        // console.log(categoria)
        // console.log("Instensidade")
        // console.log(intensidade)
        const title = req.params.title
        // console.log(title)
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
            // const { page = 1 } = request.query;

            // const [count] = await connection('aulas').count();

            // const aulas = await connection('aulas')
            // .limit(5)
            // .offset((page -1) * 5)
            // .select(['aulas.*']);

            // response.header('X-Total-Count', count['count(*)'])
            
            // return response.json(aulas);

    }

}