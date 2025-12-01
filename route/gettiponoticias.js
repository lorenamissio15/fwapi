module.exports = (app) => {
    app.get('/noticias/tipo/:tiponoticias', async (req, res) => {
        try {
            const tiponoticias = req.params.tiponoticias
            await app.DBClient.connect(); //realizar a conexão com o banco 
            const noticias = await app.DBClient.db('portalnoticias')
                .collection('noticias').find({ tiponoticia: new RegExp(tiponoticias,'i')}).toArray();
            res.json(noticias)
        } finally {
            await app.DBClient.close();
        }
    })
}