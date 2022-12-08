const knl = require('../knl');
const securityConsts = require('../consts/security-consts');
const Joi = require('joi');

knl.post('pedido', async (req, resp) => {
    const schema = Joi.object({
        name : Joi.string().max(100).min(1).required(),
        fantasyName: Joi.string().max(100).min.required(),
        clienteDesde: Joi.string().max(100).min(1).required(),
        
       

    });

    knl.validate(req.body, schema);

    const user = knl.sequelize().models.pedido.build({
        name: req.body.name,
        status: 1
    });
    
    await user.save();
    resp.end();

}, securityConsts.USER_TYPE_PUBLIC);

knl.get('pedido', async (req, resp) => {
    const schema = Joi.object({
        name : Joi.string().max(100).min(1).required(),  
  });

const result = await knl.sequelize().models.pedido.findAll({
    where : {
    status : 1

    }
    })
resp.json(result);
console.log(result);
})
knl.patch('pedido', async (req, resp)=> {
    const result = await knl.sequelize().models.pedido.update(
      
        {
            status : 2
        },
        
            { where : 
        { id :
            req.params.id
        },
            }
        )
    resp.json({result});
    console.log(result)
})