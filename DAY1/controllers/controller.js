exports.getdefault = function(req, res){
    res.send('You are on the root route');
};

exports.aboutus=function(req, res){
    res.send('You are on the about us route.');
};
  //
exports.addemployee=function(req, res){
    let empName = request.body.empName;
    let empPass = request.body.empPass;
    response.send(`POST success, you sent ${empName} and ${empPass}, thanks!`);
};
  //
exports.getemployees=function(req, res){
    res.send('You are on the getdocs route.');
};
  
