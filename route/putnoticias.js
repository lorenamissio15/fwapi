const { ObjectId } = require("mongodb")
module.exports = (app) => {
    app.put("/putnoticias", async (req, res) => {
        try {
            const _id = ObjectId.createFromHexString(req.body._id)
            const titulonoticia = req.body.titulonoticia
            const conteudonoticia = req.body.conteudonoticia
            const tiponoticia = req.body.tiponoticia
            await app.DBClient.connect()
            const resultado = await app.DBClient.db('portalnoticias')
                .collection('noticias')
                .updateOne({ _id: _id },
                    {
                        $set: { titulonoticia: titulonoticia, conteudonoticia: conteudonoticia, tiponoticia: tiponoticia }
                    })
            console.log(resultado)
            if (!resultado.modifiedCount) {
                throw new Error();
            } else { res.status(200).json({ status: 1 }) }
        } catch (error) {
            res.status(400).json({ status: 0 })
        }
    })
}