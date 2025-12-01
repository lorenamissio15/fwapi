const { ObjectId } = require("mongodb")
module.exports = (app) => {
    app.delete("/delnoticias", async (req, res) => {
        try {
            const _id = ObjectId.createFromHexString(req.body._id)
            await app.DBClient.connect()
            const resultado = await app.DBClient.db('portalnoticias')
                .collection('noticias')
                .deleteOne({ _id: _id })
            if (!resultado.deletedCount) {
                throw new Error("Nenhuma notícia foi apagada — id não encontrado.");
            } else { res.status(200).send("Notícia Apagada") }
        } catch (error) {
            res.status(400).send("" + error)
        }
    })
}