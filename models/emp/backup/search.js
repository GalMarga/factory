// showAllEmp.js
const rul = 'http://localhost:3000/employees';

async function Search() {
  axios.get(rul)
    .then(function (response) {
      let data = response.data;
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
   

// input the all new tr to "let" and put it in append (multi)
      let trTitles = document.createElement("tr");
      trTitles.append(tdId, tdFullName, tdLastName, tdStartYear,tdActions);

      tbl.appendChild(trTitles);
// data for each
      data.forEach(item => {


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
      // handle error
      // console.log(error);
    });
}

