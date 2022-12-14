const knl = require('../knl');
const securityConsts = require('../consts/security-consts');
const Joi = require('joi');

knl.post('pedido', async (req, resp) => {
    const schema = Joi.object({
      fkCliente : Joi.number().min(1),
      issueDate: Joi.date().raw().required(),
      deliveryDate: Joi.date().raw().required(),
      fkEndereco: Joi.number().min(1).required(),
      total: Joi.number().min(1).required() 
    });

    knl.validate(req.body, schema);

    const user = knl.sequelize().models.pedido.build({
        fkCliente: req.body.fkCliente,
        issueDate: req.body.issueDate,
        deliveryDate: req.body.deliveryDate,
        fkEndereco: req.body.fkEndereco,
        total: req.body.total,
        status: 1
    });
    
    await user.save();
    resp.end();

}, securityConsts.USER_TYPE_PUBLIC);

knl.get('pedido', async (req, resp) => {
let result = await knl.sequelize().models.pedido.findAll({
    where : {
         status : 1
    }
 });
 result = knl.objects.copy(result);

 if(!knl.objects.isEmptyArray(result));

    for(let pedido of result){
        const cliente = await knl.sequelize().models.cliente.findAll(
            {where: {id : pedido.fkCliente}}
        )
        if(!knl.objects.isEmptyArray(cliente)){
            pedido.cliente_description = cliente[0].description
        }
    }

resp.json(result);
});
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
    resp.json({ result });
    console.log(result)
})