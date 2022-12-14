
const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('endereco', {
        id : {
            type : Sequelize.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },

 rua:{
    type: Sequelize.STRING(100),
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
cep: {
    type: Sequelize.STRING(100),
    allowNull: false
},
complemento: {
    type: Sequelize.STRING(100),
    allowNull: false
},
numero: {
    type: Sequelize.STRING(100),
    allowNull: false
},
fkCliente: {
    type: Sequelize.INTEGER,
    allowNull: false
},
PontoR: {
    type: Sequelize.STRING(100),
    allowNull: false
}
})
}
