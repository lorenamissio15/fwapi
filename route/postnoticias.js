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
            if (!resultado.acknowledged) {
                res.json({ status: 0 })
            }
            res.json({ status: 1 })
        } catch (error) {
            res.json({ status: 0 })
        }
    })
}