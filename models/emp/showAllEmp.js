// showAllEmp.js
const rul = 'http://localhost:3000/employees';

async function getData() {
  axios.get(rul)
    .then(function (response) {
      let data = response.data;
      console.log('dataEmp: ', data);
      // console.table(data);
// Table 
      let tbl = document.getElementById("tbl");
      tbl.innerText = ""; // reset 
// Create th
      let tdFullName = document.createElement("th");
      tdFullName.classList.add("th");
      let tdLastName = document.createElement("th");
      tdLastName.classList.add("th");
      let tdStartYear = document.createElement("th");
      tdStartYear.classList.add("th");
      let tdDep = document.createElement("th");
      tdDep.classList.add("th");
      let tdShifts = document.createElement("th");
      tdShifts.classList.add("th");
      let tdActions = document.createElement("th");
      tdActions.classList.add("th");

//name tr

      tdFullName.innerText = "First Name";
      tdLastName.innerText = "Last Name";
      tdStartYear.innerText = "Start Year";
      tdDep.innerText = "Departemnt";
      tdShifts.innerText = "Shifts";
      tdActions.innerText = "Actions"
   
// input the all new tr to "let" and put it in append (multi)
      let trTitles = document.createElement("tr");
      trTitles.append(tdFullName, tdLastName, tdStartYear, tdDep, tdShifts , tdActions);
      tbl.appendChild(trTitles);

// data for each

      data.forEach(item => {
        // create for evey emp new td
        let tdId = document.createElement("td");
        let tdFullName = document.createElement("td");
        let tdLastName = document.createElement("td");
        let tdStartYear = document.createElement("td");
        let tdDep = document.createElement("td");
        let tdShifts = document.createElement("td");
        let tdActions = document.createElement("td");
        
//put the value 
        tdId.innerText = item._id
        tdFullName.innerText = item.firstName;
        tdLastName.innerText = item.lastName;
        tdStartYear.innerText = item.startYear;
        tdDep.innerText = item.departmentID;
//Create BTN

        let editBtn = document.createElement("button");
        
        editBtn.innerText = "Edit";
        editBtn.onclick = function () {
          let idForEdit = item._id;
          window.location.href = `/editemp?id=${idForEdit}`;
}
        //
        let addShiftBtn = document.createElement('button')
        addShiftBtn.innerText = 'Add Shift'
       //
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
      
// function axios delete Emp
        deleteBtn.addEventListener("click", () => {

          axios.delete(`http://localhost:3000/employees/${item._id}`)
            .then(function (response) {
             console.log("Emp Removed");
              tr.remove();
        
            })
            .catch(function (error) {
              console.log(error);
            });

            axios.get(`http://localhost:3000/user`)
            .then(function (response) {
                const data = response.data;
                // Find user with matching idEmp
                const userToDelete = data.find(user => user.idEmp === item._id);
                if (userToDelete) {
                  // Delete the user
                  axios.delete(`http://localhost:3000/user/${userToDelete._id}`)
                    .then(function (response) {
                      console.log("User Removed");
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                }
            })
        });

        tdActions.append(editBtn, addShiftBtn, deleteBtn);

        let tr = document.createElement("tr");
        tr.append( tdFullName, tdLastName, tdStartYear,tdDep ,tdShifts, tdActions);

        tbl.append(tr);
      });
    })
    .catch(function (error) {
      // handle error
      // console.log(error);
    });
}

async function editEmp() {
  const urlParams = new URLSearchParams(window.location.search);
  const employeeId = urlParams.get('id');

  const firstName = document.getElementById("EDLfirstName").value;
  const lastName = document.getElementById("EDLlastName").value;
  const numOfActions = document.getElementById("EDLnumOfActions").value;
  const departmentID = document.getElementById("EDLdepartmentID").value;

  axios.put(`http://localhost:3000/employees/${employeeId}`, {
    firstName: firstName,
    lastName: lastName,
    numOfActions: numOfActions,
    departmentID: departmentID
  })
    .then((response) => {
      console.log('Data successfully updated:', response.data);
      window.location.href = '/employeesPage'
      // Add any further handling of the response here
    })
    .catch((error) => {
      console.error('Error updating data:', error);
      // Add error handling here
    });
}



async function searchById() {

  let inpId = document.getElementById("inpId").value;
  document.getElementById("inpId").value = ""

    let axiosData = axios.get(`http://localhost:3000/employees/${inpId}`)
    .then(function (response) {
      let data = [response.data]
      console.log(data);
      console.table(data);
// Table 
      let tbl = document.getElementById("tbl");
      tbl.innerText = ""; // reset 
// Create th
      let tdId = document.createElement("th");
      tdId.classList.add("th");
      let tdFullName = document.createElement("th");
      tdFullName.classList.add("th");
      let tdLastName = document.createElement("th");
      tdLastName.classList.add("th");
      let tdStartYear = document.createElement("th");
      tdStartYear.classList.add("th");
      let tdActions = document.createElement("th");
      tdActions.classList.add("th");
      
//name tr
      tdId.innerText = "ID";
      tdFullName.innerText = "First Name";
      tdLastName.innerText = "Last Name";
      tdStartYear.innerText = "Start Year";
      tdActions.innerText = "Actions"
   


      let trTitles = document.createElement("tr");
      trTitles.append(tdId, tdFullName, tdLastName, tdStartYear,tdActions);

      tbl.appendChild(trTitles);

      let filteredData = data.filter(item => {
        
        return inpId == item._id
   
      
      });

      

// data for each

        filteredData.forEach(item => {
        // create for evey emp new td
        let tdId = document.createElement("td");
        let tdFullName = document.createElement("td");
        let tdLastName = document.createElement("td");
        let tdStartYear = document.createElement("td");
        let tdActions = document.createElement("td");
        
//put the value 
        tdId.innerText = item._id
        tdFullName.innerText = item.firstName;
        tdLastName.innerText = item.lastName;
        tdStartYear.innerText = item.startYear;
//Create BTN
        let editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.onclick = function () {
        window.location.href = '/editemp';
        }
        //
        let addShiftBtn = document.createElement('button')
        addShiftBtn.innerText = 'Add Shift'
       //
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";

      
// function axios delete Emp
        deleteBtn.addEventListener("click", () => {

          axios.delete(`http://localhost:3000/employees/${item._id}`)
            .then(function (response) {
             console.log("Emp Removed");
              tr.remove();
        
            })
            .catch(function (error) {
              console.log(error);
            });
        });

        tdActions.append(editBtn, addShiftBtn, deleteBtn);

        let tr = document.createElement("tr");
        tr.append(tdId, tdFullName, tdLastName, tdStartYear, tdActions);

        tbl.append(tr);
      });
    })
    .catch(function (error) {

    });
}

async function searchByName() {

  let inpFname = document.getElementById("inpFname").value;
  document.getElementById("inpFname").value = "";

    let axiosData = await axios.get(`http://localhost:3000/Employees?name=${inpFname}`)
    .then(function (response) {
      let data = response.data
      console.log(data);
      console.table(data);
// Table 
      let tbl = document.getElementById("tbl");
      tbl.innerText = ""; // reset 
// Create th
      let tdId = document.createElement("th");
      tdId.classList.add("th");
      let tdFullName = document.createElement("th");
      tdFullName.classList.add("th");
      let tdLastName = document.createElement("th");
      tdLastName.classList.add("th");
      let tdStartYear = document.createElement("th");
      tdStartYear.classList.add("th");
      let tdActions = document.createElement("th");
      tdActions.classList.add("th");
      
//name tr
      tdId.innerText = "ID";
      tdFullName.innerText = "First Name";
      tdLastName.innerText = "Last Name";
      tdStartYear.innerText = "Start Year";
      tdActions.innerText = "Actions"
   


      let trTitles = document.createElement("tr");
      trTitles.append(tdId, tdFullName, tdLastName, tdStartYear,tdActions);

      tbl.appendChild(trTitles);

      let filteredData = data.filter(item => {


  console.log('item.firstName: ', item.firstName);

        return inpFname == item.firstName

      });

      

// data for each

filteredData.forEach(item => {
        // create for evey emp new td
        let tdId = document.createElement("td");
        let tdFullName = document.createElement("td");
        let tdLastName = document.createElement("td");
        let tdStartYear = document.createElement("td");
        let tdActions = document.createElement("td");
        
//put the value 
        tdId.innerText = item._id
        tdFullName.innerText = item.firstName;
        tdLastName.innerText = item.lastName;
        tdStartYear.innerText = item.startYear;
//Create BTN
        let editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.onclick = function () {
          window.location.href = '/editemp';
        }
        //
        let addShiftBtn = document.createElement('button')
        addShiftBtn.innerText = 'Add Shift'
       //
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";

      
// function axios delete Emp
        deleteBtn.addEventListener("click", () => {

          axios.delete(`http://localhost:3000/employees/${item._id}`)
            .then(function (response) {
             console.log("Emp Removed");
              tr.remove();
        
            })
            .catch(function (error) {
              console.log(error);
            });
        });

        tdActions.append(editBtn, addShiftBtn, deleteBtn);

        let tr = document.createElement("tr");
        tr.append(tdId, tdFullName, tdLastName, tdStartYear, tdActions);

        tbl.append(tr);
      });
    })
    .catch(function (error) {

    });
}

async function searchByLastName() {

  let inpLname = document.getElementById("inpLname").value;
  document.getElementById("inpLname").value = "";

    let axiosData = await axios.get(`http://localhost:3000/Employees?name=${inpLname}`)
    .then(function (response) {
      let data = response.data
      console.log(data);
      console.table(data);
// Table 
      let tbl = document.getElementById("tbl");
      tbl.innerText = ""; // reset 
// Create th
      let tdId = document.createElement("th");
      tdId.classList.add("th");
      let tdFullName = document.createElement("th");
      tdFullName.classList.add("th");
      let tdLastName = document.createElement("th");
      tdLastName.classList.add("th");
      let tdStartYear = document.createElement("th");
      tdStartYear.classList.add("th");
      let tdActions = document.createElement("th");
      tdActions.classList.add("th");
      
//name tr
      tdId.innerText = "ID";
      tdFullName.innerText = "First Name";
      tdLastName.innerText = "Last Name";
      tdStartYear.innerText = "Start Year";
      tdActions.innerText = "Actions"
   


      let trTitles = document.createElement("tr");
      trTitles.append(tdId, tdFullName, tdLastName, tdStartYear,tdActions);

      tbl.appendChild(trTitles);

      let filteredData = data.filter(item => {


  console.log('item.firstName: ', item.lastName);

        return inpLname == item.lastName

      });

      

// data for each

filteredData.forEach(item => {
        // create for evey emp new td
        let tdId = document.createElement("td");
        let tdFullName = document.createElement("td");
        let tdLastName = document.createElement("td");
        let tdStartYear = document.createElement("td");
        let tdActions = document.createElement("td");
        
//put the value 
        tdId.innerText = item._id
        tdFullName.innerText = item.firstName;
        tdLastName.innerText = item.lastName;
        tdStartYear.innerText = item.startYear;
//Create BTN
        let editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.onclick = function () {
          window.location.href = '/editemp';
        }
        //
        let addShiftBtn = document.createElement('button')
        addShiftBtn.innerText = 'Add Shift'
       //
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";

      
// function axios delete Emp
        deleteBtn.addEventListener("click", () => {

          axios.delete(`http://localhost:3000/employees/${item._id}`)
            .then(function (response) {
             console.log("Emp Removed");
              tr.remove();
        
            })
            .catch(function (error) {
              console.log(error);
            });
        });

        tdActions.append(editBtn, addShiftBtn, deleteBtn);

        let tr = document.createElement("tr");
        tr.append(tdId, tdFullName, tdLastName, tdStartYear, tdActions);

        tbl.append(tr);
      });
    })
    .catch(function (error) {

    });
}

async function searchByDep() {

  let inpDep = document.getElementById("inpDep").value;
  document.getElementById("inpDep").value = "";

    let axiosData = await axios.get(`http://localhost:3000/Employees?name=${inpDep}`)
    .then(function (response) {
      let data = response.data
      console.log(data);
      console.table(data);
// Table 
      let tbl = document.getElementById("tbl");
      tbl.innerText = ""; // reset 
// Create th
      let tdId = document.createElement("th");
      tdId.classList.add("th");
      let tdFullName = document.createElement("th");
      tdFullName.classList.add("th");
      let tdLastName = document.createElement("th");
      tdLastName.classList.add("th");
      let tdStartYear = document.createElement("th");
      tdStartYear.classList.add("th");
      let tdActions = document.createElement("th");
      tdActions.classList.add("th");
      
//name tr
      tdId.innerText = "ID";
      tdFullName.innerText = "First Name";
      tdLastName.innerText = "Last Name";
      tdStartYear.innerText = "Start Year";
      tdActions.innerText = "Actions"
   


      let trTitles = document.createElement("tr");
      trTitles.append(tdId, tdFullName, tdLastName, tdStartYear,tdActions);

      tbl.appendChild(trTitles);

      let filteredData = data.filter(item => {

        return inpDep == item.departmentID

      });

      

// data for each

filteredData.forEach(item => {
        // create for evey emp new td
        let tdId = document.createElement("td");
        let tdFullName = document.createElement("td");
        let tdLastName = document.createElement("td");
        let tdStartYear = document.createElement("td");
        let tdActions = document.createElement("td");
        
//put the value 
        tdId.innerText = item._id
        tdFullName.innerText = item.firstName;
        tdLastName.innerText = item.lastName;
        tdStartYear.innerText = item.startYear;
//Create BTN
        let editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.onclick = function () {
          window.location.href = '/editemp';
        }
        //
        let addShiftBtn = document.createElement('button')
        addShiftBtn.innerText = 'Add Shift'
       //
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";

      
// function axios delete Emp
        deleteBtn.addEventListener("click", () => {

          axios.delete(`http://localhost:3000/employees/${item._id}`)
            .then(function (response) {
             console.log("Emp Removed");
              tr.remove();
        
            })
            .catch(function (error) {
              console.log(error);
            });
        });

        tdActions.append(editBtn, addShiftBtn, deleteBtn);

        let tr = document.createElement("tr");
        tr.append(tdId, tdFullName, tdLastName, tdStartYear, tdActions);

        tbl.append(tr);
      });
    })
    .catch(function (error) {

    });
}

 async function deleteAllemp() {

  axios.get(`http://localhost:3000/employees`)
.then(function (response) {
    const data = response.data
    console.log('data: ', data._id);

    data.forEach(item => { 

  console.log(item._id)

  axios.delete(`http://localhost:3000/employees/${item._id}`)
  .then(function (response) {
      const data = response.data
      console.log('data: ', data._id);
    })

    })
})

 }



