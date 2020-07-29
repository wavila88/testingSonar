var crypto = require('crypto');

const  ProcessObfuscate = (value) =>{
  var metodoProcess= 'aes-256-ctr';
  var entry_allowed = '6044452a-b7fc-11ea-a191-6829926338ee';
  var cipher = crypto.createCipher(metodoProcess,entry_allowed); //NO SONNAR
  var ValueOfus = cipher.update(value,'utf8','hex');
  ValueOfus += cipher.final('hex');
  return ValueOfus;
};

const  ProcessDesObfuscate = (value) =>{
  var metodoProcess= 'aes-256-ctr';
  var entry_allowed = '6044452a-b7fc-11ea-a191-6829926338ee';
  var decipher = crypto.createDecipher(metodoProcess,entry_allowed); //NO SONNAR
  var decValueOfus = decipher.update(value,'hex','utf8');
  decValueOfus += decipher.final('utf8');
  return decValueOfus;
};

module.exports.ProcessObfuscate = ProcessObfuscate;
module.exports.ProcessDesObfuscate = ProcessDesObfuscate;
