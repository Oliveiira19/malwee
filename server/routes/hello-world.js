const knl = require('../knl');
const securityConsts = require('../consts/security-consts');

knl.get('qualquercoisa', async (req, resp) => {
    resp.json({});
    resp.end();
}, securityConsts.USER_TYPE_PUBLIC)