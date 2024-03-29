let employeesName = document.getElementById("empShift")
let departemntName = document.getElementById("depShift")
let time = document.getElementById("time")


async function getDataForShift()
{

  const urlParams = new URLSearchParams(window.location.search);
  const employeeId = urlParams.get('id');


  await axios.get(`http://localhost:3000/employees/${employeeId}`)
  .then(function (response) {
    let data = response.data
    employeesName.innerHTML = data.firstName + " " + data.lastName
    departemntName.innerHTML = data.departmentID

    let name = data.firstName + " " + data.lastName
    let dep = data.departmentID
    let idEmp = data._id

    let nameStorge = localStorage.setItem( "nameSto" , name)
    let depStorge = localStorage.setItem( "depSto" , dep)
    let idEmpStorge = localStorage.setItem( "idEmpSto" , idEmp)


  })
 
}


async function addShift() {

    let setItemName = localStorage.getItem("nameSto")
   
    let setItemDep = localStorage.getItem("depSto")
    let setIdEmp = localStorage.getItem("idEmpSto")
    
    let saveShiftname = localStorage.getItem("shiftName")

    let getTime = document.getElementById("time").innerHTML
    
    
    await axios.post(`http://localhost:3000/shifts`,  {
      employeesName: setItemName , 
      departemntName:  setItemDep,
      shift: saveShiftname,
      time : getTime,
      idEmp: setIdEmp

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

  await axios.get("http://localhost:3000/shifts") 
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
  let tdName = document.createElement("td");
  let anchor = document.createElement("a");
  
  anchor.href = `/editemp?id=${item.idEmp}` ;
  anchor.innerHTML = item.employeesName;
  
  tdName.appendChild(anchor);

  //
  let tdDep = document.createElement("td")
  tdDep.innerHTML = item.departemntName

    //
    let tdTime = document.createElement("td")
    tdTime.innerHTML = item.time

    let delBtn = document.createElement("button");
        
    delBtn.innerText = "Delete Shift";

    delBtn.addEventListener("click", () => {

      axios.delete(`http://localhost:3000/shifts/${item._id}`)
        .then(function (response) {
         console.log("Shift Removed");
          tr.remove();
    
        })
        .catch(function (error) {
          console.log(error);
        });

      });


tr.append(tdshift, tdName, tdDep, tdTime,delBtn)
tbl.appendChild(tr)
})
});
  }

