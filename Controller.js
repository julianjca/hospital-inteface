const Employee = require('./EmployeeModel');
const View = require('./View');

class Controller{
  constructor(){
    //this.ListEmployee = [];
  }

  createEmployee(username,password,role){
    console.log(username,password,role)
    const emp = new Employee(username,password,role);
    let data = emp.saveFile();
    //this.ListEmployee.push(emp);
    console.log(emp);
    View.printingRegister(data[0],data[1]);
  }

  login(username,password){
    const emp = new Employee(username,password);
  }
}

module.exports = Controller;
