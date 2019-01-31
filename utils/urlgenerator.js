const urlconfig = require('./urlconfig');

exports.urlGenerator = (config, args) => {
    if (config && args && Object.keys(args).length > 0) {
        console.log('here')
        let configObj = urlconfig[config];
        if (configObj) {
            let uri = `${urlconfig.baseURL}${configObj.path}?`
            Object.entries(args).forEach(item => {
                if (item[0] && item[0] in configObj.params && item[1]) {
                    uri = `${uri}${configObj.params[item[0]]}${item[1]}&`
                }
            })
            return uri;
        }
    }
    return
}