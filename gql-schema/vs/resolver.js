const rp = require('request-promise')
const urlgenerator = require('../../utils');
const resolvers = {
    Query: {
        result: async (root, args, context) => {
            console.log(args)
            let { type, ...dArgs } = args;
         
            let url = urlgenerator(type, dArgs);
            if (url) {
                let resp = await rp.get(url)
                return JSON.parse(resp)

            }
        }
    },
    searchresult: {
        __resolveType(object, info) {
            if(object.word!=undefined){
                return 'VS'
            }
            return 'RV'
        }
    }
}

module.exports = { resolvers }