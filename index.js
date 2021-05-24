// Write your solution in this file!
const employee = {
    name: "Hank",
    streetAddress: "11 Broadway"
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({}, employee, { [key]: value });
    //returns an employee with the original key value pairs and the new key value pair
    //it does not modify the original employee, but rather returns a clone with the new data
} 

 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
     employee[key] = value;
     return employee;
     //updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee
 } 
    
 function deleteFromEmployeeByKey(employee, key){
   const newObject = Object.assign({},employee);
    delete newObject[key];
    return newObject;
    //deletes `key` from a clone of employee and returns the new employee (it is non-destructive)
    //does not modify the original employee (it is non-destructive)
 }
 
 function destructivelyDeleteFromEmployeeByKey(employee, key){
     delete employee[key];
     return employee;
     //returns employee without the delete key/value pair
    //modifies the original employee
 }