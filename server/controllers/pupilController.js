const db = require('../db')

class PupilController {
    async addPupil(req, res) {
        const {fio, contact, level, titlerate, rate, comment} = req.body
        const newPupil = await db.query(`INSERT INTO pupil (fio, contact, level, titlerate, rate, comment) values ($1, $2, $3, $4, $5, $6) RETURNING *`, [fio, contact, level, titlerate, rate, comment])
        res.json(newPupil.rows[0])
    }
}

module.exports = new PupilController()