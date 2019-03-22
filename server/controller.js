const db = require('../db/model');

const controller = {
    getAllThoughts: (req, res) => {
        db.findAll()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(404).send('error getting all thoughts', err))
    },

    postNewThought: (req, res) => {
        let { username, thought } = req.body;
        db.create({ username, thought })
        .then(data => res.status(201).send(`${username} posted successfully`))
        .catch(err => res.status(404).send(`error posting ${username}'s thought`, err))
    },

    updateThought: (req, res) => {
        let { thought } = req.body;
        let { id } = req.params;
        db.update({ thought }, { where: { id } })
        .then(data => res.status(202).send(`${username} updated thought successfully`))
        .catch(err => res.status(404).send(`error updating ${username}'s thought`, err))
    },

    deleteThought: (req, res) => {
        let { id } = req.params;
        db.destroy({ where: { id } })
        .then(data => res.status(202).send(`${username} deleted thought successfully`))
        .catch(err => res.status(404).send(`error deleting ${username}'s thought`, err))
    },

    getUsersThoughts: (req, res) => {
        db.findAll({ where: { username} })
        .then(data => res.status(200).send(data))
        .catch(err => res.status(404).send(`error getting ${username}'s thoughts`, err))
    }
}

module.exports = controller;