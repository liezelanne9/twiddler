const Sequelize = require('sequelize');
const sequelize = require('./index');

const Thoughts = sequelize.define(
    'thoughts',
    {
        username: { type: Sequelize.STRING(15), allowNull: false },
        thought: { type: Sequelize.STRING(240), allowNull: false },
        liked: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
        createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
        updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    }
)

sequelize.sync({force: false})
.then(() => console.log(`~*~~*~ Synced Thoughts table in Database ~*~~*~`))
.catch(() => console.error(err))

module.exports = Thoughts;