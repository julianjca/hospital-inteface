const Patient = require('./PatientModel');
const Employee = require('./EmployeeModel');
const Controller = require('./Controller');

// console.log(Employee);
// console.log(Patient);
// console.log(Controller);
const argv = process.argv;
//console.log(Employee);

let cmd = argv[2];
let username = argv[3];
let password = argv[4];
let role = argv[5];

//console.log(Controller);
if(cmd === 'register'){
  const ctrl = new Controller();
  ctrl.createEmployee(username,password,role);
}
else if(cmd === 'addPatient'){
  const controller = new Controller();
}
else if(cmd === 'login'){
  const ctrl = new Controller(;
  ctrl.login(username,password));

}

