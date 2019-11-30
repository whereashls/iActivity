const md5 = require('md5')
module.exports = {
    MD5: async ( val, solt ) => {
        let password = await md5(md5(val) + solt)
        return password
    },
    
    
}