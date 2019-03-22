const Sequelize = require('sequelize');

const sequelize = new Sequelize('liezel_twiddler', 'student', 'student', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate()
.then(() => console.log(`=-=-=- Connected to MySQL database -=-=-=`))
.catch(err => console.log('error connecting to MySQL', err))

module.exports = sequelize;