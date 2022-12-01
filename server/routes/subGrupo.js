const knl = require('../knl');
const securityConsts = require('../consts/security-consts');
const Joi = require('joi');
const jwt = require('../utils/jwt');
const md5 = require('../utils/md5-pass');


knl.post('subgrupo', async (req, resp) => {
    const schema = Joi.object({
        name : Joi.string().max(100).min(1).required(),
    });

    knl.validate(req.body, schema);

    const result = await knl.sequelize().models.subGrupo.findAll({
        where : {
            name : req.body.name
            
        }
    })

    knl.createException('0004', '', !knl.objects.isEmptyArray(result));

    const user = knl.sequelize().models.subGrupo.build({
        name: req.body.name,
        status: 1
    });
    
    await user.save();
    resp.end();

}, securityConsts.USER_TYPE_PUBLIC);


knl.get('subgrupo', async (req, resp) => {
    const schema = Joi.object({
        name : Joi.string().max(100).min(1).required(),  
  });

const result = await knl.sequelize().models.subGrupo.findAll({
    where : {
    status : 1

    }
    })
resp.json(result);
console.log(result);
})
knl.patch('subgrupo/:id', async (req, resp)=> {
    const result = await knl.sequelize().models.subGrupo.update(
      
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
