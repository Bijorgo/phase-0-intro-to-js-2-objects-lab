// Write your solution in this file!
const employee = {
    name: "P. Sherman",
    address: "42 Wallaby Way, Sydney",
};

function updateEmployeeWithKeyAndValue(employee,key,value) {
    return {
        ...employee,
        [key]: value
    }
    
    //use spread operator
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
    //should mutate employee object passed in
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(employee,key) {
    //spread op.
    const deleteEmployee = {...employee};
    delete deleteEmployee[key]
    return deleteEmployee

}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    //should mutate
    delete employee[key]
    return employee
}