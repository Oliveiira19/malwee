const knl = require('../knl');
const securityConsts = require('../consts/security-consts');
const Joi = require('joi');
const jwt = require('../utils/jwt');
const md5 = require('../utils/md5-pass');


knl.post('colecao', async (req, resp) => {
    const schema = Joi.object({
        name : Joi.string().max(100).min(1).required(),
    });

    knl.validate(req.body, schema);

    const result = await knl.sequelize().models.colecao.findAll({
        where : {
            name : req.body.name
            
        }
    }) 
    knl.createException('0002', '', !knl.objects.isEmptyArray(result));

    const user = knl.sequelize().models.colecao.build({
        name: req.body.name,
        status: 1
    });
    
    await user.save();
    resp.end();

}, securityConsts.USER_TYPE_PUBLIC)

knl.get('colecao', async (req, resp) =>{
    const schema = Joi.object({
        name: Joi.string().max(100).min(1).required(),
    });
    const result = await knl.sequelize().models.colecao.findAll({
        where : {
            status : 1
        }
    })
    resp.json({result }); 
    console.log(result);
})
knl.patch('colecao/:id', async (req, resp)=> {
    const result = await knl.sequelize().models.colecao.update(
      
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