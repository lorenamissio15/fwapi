module.exports = (app) => {
    app.post('/postnoticias', async (req, res) => {
        try {
            const titulonoticia = req.body.titulonoticia
            const conteudonoticia = req.body.conteudonoticia
            const tiponoticia = req.body.tiponoticia
            await app.DBClient.connect(); //aqui o erro
            const resultado = await app.DBClient.db('portalnoticias')
                .collection('noticias')
                .insertOne({ 
                    titulonoticia: titulonoticia,
                    conteudonoticia: conteudonoticia,
                    tiponoticia: tiponoticia,
                    datahoracadastro: new Date()
                })
            res.send("Notícia Gravada com sucesso!")
        } catch (error) {
            res.send("Não foi possível gravar a notícia")
        }
    })
}