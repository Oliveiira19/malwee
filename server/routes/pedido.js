const knl = require('../knl');
const securityConsts = require('../consts/security-consts');
const Joi = require('joi');

knl.post('pedido', async (req, resp) => {
    const schema = Joi.object({
      fkCliente : Joi.number().min(1),
      issueDate: Joi.date().raw().required(),
      deliveryDate: Joi.date().raw().required(),
      fkEndereço: Joi.number().min(1).required(),
      total: Joi.number().min(1).required() 
    });

    knl.validate(req.body, schema);

    const user = knl.sequelize().models.pedido.build({
        name: req.body.name,
        fkCliente: req.body.fkCliente,
        issueDate: req.body.issueDate,
        deliveryDate: req.body.deliveryDate,
        fkEndereço: req.body.fkEndereço,
        total: req.body.total,
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
knl.patch('pedido/id', async (req, resp)=> {
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
    resp.json({
       Status: result
    });
    console.log(result)
})