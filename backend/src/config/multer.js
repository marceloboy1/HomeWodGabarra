const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp'),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null,path.resolve(__dirname, '..', '..', 'tmp'),)
        },
        filename: (rec, file, cb) => {
            crypto.randomBytes(8 , (err, hash) => {
                if (err) cb(err);

                //const fileName = `${hash.toString('hex')}-${file.originalname}`;
                const fileName = file.originalname;
                
                cb (null, fileName);
            });
        
        },
    }),
    
    limits:{
        fileSize: 200 * 1024 * 1024 
    },

    fileFilter:(req, file, cb) => {
        const allowedMimes = [
            'video/mp4'
        ];

        if (allowedMimes.includes(file.mimetype)){
            cb(null,true);
        }
        else{
            cb(new Error('Arquivo inválido'));
        }        
    }
};
