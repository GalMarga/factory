
const rul = 'http://localhost:3000/employees';

let employeesName = document.getElementById("empShift")
let departemntName = document.getElementById("depShift")

async function getDataForShift()
{

  const urlParams = new URLSearchParams(window.location.search);
  const employeeId = urlParams.get('id');


  axios.get(`http://localhost:3000/employees/${employeeId}`)
  .then(function (response) {
    let data = response.data
    employeesName.innerHTML = data.firstName + " " + data.lastName
    departemntName.innerHTML = data.departmentID
  })
 
}
