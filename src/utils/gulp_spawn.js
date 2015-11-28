var spawn = require('child_process').spawn;

module.exports = function(_module, args, cb){

  var node_module_dir = __dirname+'/../../node_modules/',
      child = spawn(node_module_dir+'.bin/gulp', (args || []), {
        cwd: node_module_dir+_module,
        stdio: 'inherit'
      });

  child.on('close', function(err){
    if(cb) cb();
  });

};
