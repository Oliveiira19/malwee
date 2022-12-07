const knl = require('../knl');
const securityConsts = require('../consts/security-consts');
const Joi = require('joi');
const jwt = require('../utils/jwt');
const md5 = require('../utils/md5-pass');
const { object } = require('joi');

// Alterei uma rota
knl.post('cliente', async (req, resp) => {
    const schema = Joi.object({
        name : Joi.string().max(100).min(1).required(),
        fantasyName : Joi.string().max(100).min(1).required(),
        cnpj : Joi.string().max(14).min(14),
        endereco : Joi.string().max(100).min(1).required()
    });

    knl.validate(req.body, schema);

    const result = await knl.sequelize().models.cliente.findAll({
        where : {
            name : req.body.name
            
        }
    }) 
    knl.createException('0006', '', !knl.objects.isEmptyArray(result));

    const user = knl.sequelize().models.cliente.build({
        name: req.body.name,
        fantasyName: req.body.name,
        status : 1
    });
    
    await user.save();
    resp.end();

}, securityConsts.USER_TYPE_PUBLIC);

knl.get('cliente' , async(req, resp)=>{
    const result = await knl.sequelize().models.cliente.findAll({
        where : {
            status : 1
        }
    })
    resp.json(result); 
    console.log(result);
})

knl.patch('cliente', async(req, resp)=>{
    const result = await knl.sequelize().models.cliente.update(
        {
            status : 3
        },
        
            { where : 
        { id :
            req.params.id
        },
            }
        )
    resp.json({result});
    console.log(result);
    })
