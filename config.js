//let environmentConfig = null

module.exports = function() {

    config_data = require('./config.json')

    var setEnvironment = process.env.NODE_ENV || 'development';
    if (!( setEnvironment in config_data)){
        setEnvironment = 'development'
    }

    const environment = setEnvironment
    const environmentConfig = config_data[environment];

    //console.log(environmentConfig)

    //console.log(environmentConfig.API_URI);
    if(process.env.node_port){
        environmentConfig.node_port =  process.env.node_port;
    }
    
    if(process.env.API_location){
        environmentConfig.API_location =  process.env.API_location;
    }

    return environmentConfig
}