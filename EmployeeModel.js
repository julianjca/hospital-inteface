const fs = require('fs');
//const Controller = require('./Controller');
const View = require('./View');


class Employee {
  constructor(name, password, position) {
    this.name = name;
    this.position = position;
    this.username = name;
    this.password = password;
  }

  saveFile(){
    let obj = {};
    obj.username = this.name;
    obj.password = this.password;
    obj.role = this.position;
    console.log(obj);

    let arr = JSON.parse(fs.readFileSync('./employee.json','utf-8'));
    console.log(arr);
    arr.push(obj);
    let str = JSON.stringify(arr);
    fs.writeFileSync('./employee.json',str,'utf-8');
    let finalArr = [obj,arr.length];
    return finalArr;
  }

  checkFile(){
    let arr = JSON.parse(fs.readFileSync('./employee.json','utf-8'));
    console.log(arr);
    for(let i = 0;i<arr.length;i++){
      if(arr[i].username===this.username&&this.password===arr[i].password){
        return true;
      }
    }
    return false;

  }
}

module.exports = Employee;
