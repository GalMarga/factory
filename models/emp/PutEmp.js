async function editEmp() {

    axios.get(`http://localhost:3000/employees`)
  .then(function (response) {
      const data = response.data
      data.forEach(item => { 
            
            const firstName = document.getElementById("EDLfirstName").value;
            console.log('firstName: ', firstName);
            const lastName = document.getElementById("EDLlastName").value;
            console.log('lastName: ', lastName);
            const numOfActions = document.getElementById("EDLnumOfActions").value;
            console.log('numOfActions: ', numOfActions);
            const departmentID = document.getElementById("EDLdepartmentID").value;
            console.log('departmentID: ', departmentID);
          
            axios.put(`http://localhost:3000/employees/${item._id}`, {
              firstName: firstName,
              lastName: lastName,
              numOfActions: numOfActions,
              departmentID: departmentID
            })
            .then((response) => {
              console.log('Data successfully updated:', response.data);
              // Add any further handling of the response here
            })
            .catch((error) => {
              console.error('Error updating data:', error);
              // Add error handling here
            })
        });
  })};
  

