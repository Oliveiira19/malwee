const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('Produto', {
        id : {
            type : Sequelize.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        DescP : {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        PVenda : {
            type : Sequelize.INTEGER,
            allowNull: false
        },
        FKSGrupo : {
            type : Sequelize.INTEGER,
            allowNull: false    
        },
        FKGrupo : {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        FKColecao: {
           type: Sequelize.INTEGER,
           allowNull: false 
        }
    

    }
)}
