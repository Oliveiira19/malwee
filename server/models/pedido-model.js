const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('pedido', {
        id : {
            type : Sequelize.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        fkCliente: {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        issueDate:{
            type:Sequelize.STRING(),
            allowNull: false
        },
       deliveryDate:{
        type: Sequelize.STRING(),
        allowNull: false
        },
       fkEndereço: {
        type: Sequelize.INTEGER,
        allowNull: false
        },
       total: {
        type: Sequelize.DECIMAL(),
        allowNull: false
        }
})
}
