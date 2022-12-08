const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('Pedido', {
        id : {
            type : Sequelize.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },

        rua:{
            type: Sequelize.STRING(20),
            allowNull: false
        },
        bairro: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        cidade: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        estado: {
            type: Sequelize.STRING(100),
            allowNull: false    
        },
        pais: {
            type: Sequelize.STRING(100),
            allowNull: false
        },

        fkCLiente: {
            type : Sequelize.STRING(100),
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
