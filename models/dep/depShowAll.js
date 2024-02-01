// showAllDep.js
const rul = 'http://localhost:3000/department';

async function getData() {
  axios.get(rul)
    .then(function (response) {
      let data = response.data;
      console.log(data);
      console.table(data);
// Table 
      let tbl = document.getElementById("tbl");
      tbl.innerText = ""; // reset 
// Create th
  
      let tdName = document.createElement("th");
      tdName.classList.add("th");
      let tdManager = document.createElement("th");
      tdManager.classList.add("th");
      let tdActions = document.createElement("th");
      tdActions.classList.add("th");
      
//name tr
     
      tdName.innerText = "Name";
      tdManager.innerText = "Manager";
      tdActions.innerText = "Actions"
   

// input the all new tr to "let" and put it in append (multi)
      let trTitles = document.createElement("tr");
      trTitles.append(tdName, tdManager,tdActions);
      tbl.appendChild(trTitles);
// data for each
      data.forEach(item => {
    
        let tdName = document.createElement("td");
        let tdManager = document.createElement("td");
        let tdActions = document.createElement("td");
        
//put the value 
        
        tdName.innerText = item.name;
        tdManager.innerText = item.Manager;

//Create BTN
        let editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.onclick = function () {
          window.location.href = '/editemp';
        }

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";

      
// function axios delete Emp
        deleteBtn.addEventListener("click", () => {

          axios.delete(`http://localhost:3000/department/${item._id}`)
            .then(function (response) {
             console.log("Dep Removed");
              tr.remove();
        
            })
            .catch(function (error) {
              console.log(error);
            });
        });

        tdActions.append(editBtn, deleteBtn);
        let tr = document.createElement("tr");
        tr.append( tdName, tdManager, tdActions);
        tbl.append(tr);

        axios.get(`http://localhost:3000/employees?departmentID=${item._id}`)
        .then(function (response) {
          let employees = response.data;
          employees.forEach(employee => { 
            if (employee.name === "Production") {
              console.log("Yes");
            } else {
              console.log("no");
            }

          })


          // if (employees.length > 0) {
          //  console.log(employees.departmentID == "Production");
          // } else {
          //   deleteBtn.disabled = true; // Disable delete button
          // }

   
        });

        
      });
    })
    .catch(function (error) {
      // handle error
      // console.log(error);
    });

    
}



