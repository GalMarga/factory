let employeesName = document.getElementById("empShift")
let departemntName = document.getElementById("depShift")
let time = document.getElementById("time")


async function getDataForShift()
{

  const urlParams = new URLSearchParams(window.location.search);
  const employeeId = urlParams.get('id');


  axios.get(`http://localhost:3000/employees/${employeeId}`)
  .then(function (response) {
    let data = response.data
    employeesName.innerHTML = data.firstName + " " + data.lastName
    departemntName.innerHTML = data.departmentID

    let name = data.firstName + " " + data.lastName
    let dep = data.departmentID

    let nameStorge = localStorage.setItem( "nameSto" , name)
    let depStorge = localStorage.setItem( "depSto" , dep)

  })
 
}


async function addShift() {

  let setItemName = localStorage.getItem("nameSto")
   

    let setItemDep = localStorage.getItem("depSto")
    
    let saveShiftname = localStorage.getItem("shiftName")

    let getTime = document.getElementById("time").innerHTML
    
    
    axios.post(`http://localhost:3000/shifts`,  {
      employeesName: setItemName , 
      departemntName:  setItemDep,
      shift: saveShiftname,
      time : getTime

    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    window.location.href = '/shiftspage'


}


async function getAllData () {

  axios.get("http://localhost:3000/shifts") 
  .then(function (response) {
    let data = response.data;
    console.log('dataEmp: ', data);


    data.forEach(item => {
    
      
  let tbl = document.getElementById("tblShift")
  let tr = document.createElement("tr")
  //
  let tdshift = document.createElement("td")
  tdshift.innerHTML = item.shift

  //
  let tdName = document.createElement("td")
  tdName.innerHTML = item.employeesName

  //
  let tdDep = document.createElement("td")
  tdDep.innerHTML = item.departemntName

    //
    let tdTime = document.createElement("td")
    tdTime.innerHTML = item.time



tr.append(tdshift, tdName, tdDep, tdTime)
tbl.appendChild(tr)
})
  


});


  }

