const knl = require('../knl');
const securityConsts = require('../consts/security-consts');
const Joi = require('joi');


knl.post('grupo', async (req, resp) => {
    const schema = Joi.object({
        name : Joi.string().max(100).min(1).required(),
    });

    knl.validate(req.body, schema);

    const user = knl.sequelize().models.grupo.build({
        name: req.body.name,
        status: 1
    });
    
    await user.save();
    resp.end();

}, securityConsts.USER_TYPE_PUBLIC);

knl.put('grupo', async (req, resp) => {
    const schema = Joi.object({
        id   : Joi.number().min(1).required(),
        name : Joi.string().max(100).min(1).required(),
    });

    knl.validate(req.body, schema);

    await knl.sequelize().models.grupo.update(
        {
            name : req.body.name
        },
        {
            where : {id : req.body.id}
        }
    )
    resp.end();

}, securityConsts.USER_TYPE_PUBLIC);

knl.get('grupo', async (req, resp)=>{
    const schema = Joi.object({
        name : Joi.string().max(100).min(1).required(),  
  });

const result = await knl.sequelize().models.grupo.findAll({
    where : {
    status : 1

    }
    })
resp.json(result);
console.log(result);
})

knl.patch('grupo/:id', async (req, resp)=> {
    const result = await knl.sequelize().models.grupo.update(
      
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

