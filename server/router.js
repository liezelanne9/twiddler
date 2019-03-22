const router = require('express').Router();
const controller = require('./controller.js')

router.route('/')
.get(controller.getAllThoughts)
.post(controller.postNewThought)

router.route('/:id')
.put(controller.updateThought) 
.delete(controller.deleteThought)

router.route('/:username')
.get(controller.getUsersThoughts)

module.exports = router;