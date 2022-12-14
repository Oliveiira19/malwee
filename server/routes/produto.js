const knl = require('../knl');
const securityConsts = require('../consts/security-consts');
const Joi = require('joi');


knl.post('produto', async (req, resp) => {
    const schema = Joi.object({
        DescP: Joi.string.max(100).min(1),
        PVenda: Joi.number().min(1),
        FKSGrupo: Joi.number().min(1).required(),
        FKGrupo: Joi.number().min(1).required(),
        FKColecao: Joi.number().min(1).required()
        
    });

    knl.validate(req.body, schema);

    const user = knl.sequelize().models.produto.build({
       DescP: req.body.DescP,
       PVenda: req.body.PVenda,
       FKSGrupo: req.body.FkSGrupo,
       FKGrupo: req.body.FkGrupo,
       FKColecao: req.body.FkColecao,

        status: 1
    });
    
    await user.save();
    resp.end();

}, securityConsts.USER_TYPE_PUBLIC);

knl.put('produto', async (req, resp) => {
    const schema = Joi.object({
        id   : Joi.number().min(1).required(),
        name : Joi.string().max(100).min(1).required(),
    });

    knl.validate(req.body, schema);

    await knl.sequelize().models.produto.update(
        {
            name : req.body.name
        },
        {
            where : {id : req.body.id}
        }
    )
    resp.end();

}, securityConsts.USER_TYPE_PUBLIC);

knl.get('produto', async (req, resp)=>{
const result = await knl.sequelize().models.produto.findAll({
    where : {
    status : 1  

    }
    })
resp.json(result);
console.log(result);
})

knl.patch('produto', async (req, resp)=> {
    const result = await knl.sequelize().models.produto.update(
      
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