// showAllEmp.js
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
      // let tdId = document.createElement("th");
      // tdId.classList.add("th");
      // let tdDepID = document.createElement("th");
      // tdDepID.classList.add("th");
      let tdName = document.createElement("th");
      tdName.classList.add("th");
      let tdManager = document.createElement("th");
      tdManager.classList.add("th");
      let tdActions = document.createElement("th");
      tdActions.classList.add("th");
      
//name tr
      // tdId.innerText = "ID";
      // tdDepID.innerText = "Department ID";
      tdName.innerText = "Name";
      tdManager.innerText = "Manager";
      tdActions.innerText = "Actions"
   

// input the all new tr to "let" and put it in append (multi)
      let trTitles = document.createElement("tr");
      trTitles.append(tdName, tdManager,tdActions);

      tbl.appendChild(trTitles);
// data for each
      data.forEach(item => {
        // create for evey emp new td
        // let tdId = document.createElement("td");
        // let tdDepID = document.createElement("td");
        let tdName = document.createElement("td");
        let tdManager = document.createElement("td");
        let tdActions = document.createElement("td");
        
//put the value 
        // tdId.innerText = item._id
        // tdDepID.innerText = item.idDep;
        tdName.innerText = item.name;
        tdManager.innerText = item.Manager;
//Create BTN
        let editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.onclick = function () {
          window.location.href = '/editemp';
        }
        //
      //   let addShiftBtn = document.createElement('button')
      //   addShiftBtn.innerText = 'Add Shift'
      //  //
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";

      
// function axios delete Emp
        deleteBtn.addEventListener("click", () => {

          axios.delete(`http://localhost:3000/department/${item._id}`)
            .then(function (response) {
             console.log("Emp Removed");
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
      });
    })
    .catch(function (error) {
      // handle error
      // console.log(error);
    });
}

