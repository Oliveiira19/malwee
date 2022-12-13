const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('cliente', {
        id : {
            type : Sequelize.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        name : {
            type : Sequelize.STRING(100),
            allowNull : false
        },
        fantasyName : {
            type : Sequelize.STRING(100),
            allowNull : false
        },
        cnpj : {
            type : Sequelize.STRING(14),
            allowNull: false
        },
        status : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        clienteDesde : {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        cpf : {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        
    }
)}
