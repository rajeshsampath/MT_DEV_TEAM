const fs =  require('fs'),
    path = require('path'),
    moment = require('moment'),
    cryptoLib = require('cryptlib'),
    config = require('config'),
    types = rootRequire('services/types');


exports.logWriter = function(data, filename, foldername, append){
    if(typeof data == 'object'){
        data = JSON.stringify(data);
    }
    logPath = createLogFolder(folderName);
    var currentDate = moment().format('DD-MM-YYYY');
    logPath = logPath+filename+'.log';
    if(append){
        var newData = "\n"+data;
        fs.appendFile(logPath, data);
    }else{
        fs.writeFileSync(logPath, data);
    }
}

function createLogFolder(folderName){
    var currentDate = moment().format('DD-MM-YYYY');
    var currentHr = moment().format('HH');
    var logPathDir=path.join(__dirname,'../../../logs');
    if(!fs.existsSync(logPathDir)){
        fs.mkdirSync(logPathDir);
    }
    logPathDir=path.join(logPathDir+'/'+currentDate);
    if(!fs.existsSync(logPathDir)){
        fs.mkdirSync(logPathDir);
    }
    logPathDir=path.join(logPathDir+'/'+currentHr);
    if(!fs.existsSync(logPathDir)){
        fs.mkdirSync(logPathDir);
    }
    logPathDir=path.join(logPathDir+'/'+folderName);
    if(!fs.existsSync(logPathDir)){
        fs.mkdirSync(logPathDir);
    }
    return logPathDir+"/"
}