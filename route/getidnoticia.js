const { ObjectId } = require("mongodb");

module.exports = (app) => {
    app.get('/noticias/id/:id', async (req, res) => {
        try {
            const id = ObjectId.createFromHexString(req.params.id)
            
            await app.DBClient.connect(); //realizar a conexão com o banco 
            const noticias = await app.DBClient.db('portalnoticias')
                .collection('noticias').find({ _id: id }).toArray();
            res.json(noticias)
        } finally {
            // Ensures that the client will close when you finish/error
            await app.DBClient.close();
        }
    })

}

