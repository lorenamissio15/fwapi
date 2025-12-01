const { ObjectId } = require("mongodb");
module.exports = (app) => {
    app.get('/noticias/id/:id', async (req, res) => {
        try {
            const _id = ObjectId.createFromHexString(req.params.id)
            await app.DBClient.connect(); //realizar a conexão com o banco 
            const noticias = await app.DBClient.db('portalnoticias')
                .collection('noticias').find({_id:_id}).toArray();
            res.json(noticias)
        } finally {
            await app.DBClient.close();
        }
    })
}