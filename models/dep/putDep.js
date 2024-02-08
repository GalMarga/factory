// async function editDep() {

//     axios.get(`http://localhost:3000/department`)
//   .then(function (response) {
//       const data = response.data
//       data.forEach(item => { 
//       console.log(item._id);
            
//         const newDepName = document.getElementById("inpDepName").value;
//         const NewManager = document.getElementById("depOpt").value;
          
//             axios.put(`http://localhost:3000/department/${item._id}`, {
//               name: newDepName,
//               // Manager: NewManager,
//             })
//             .then((response) => {
//               console.log('Data successfully updated:', response.data);
          
//               // Add any further handling of the response here
//             })
//             .catch((error) => {
//               console.error('Error updating data:', error);
//               // Add error handling here
//             })
//         });
//   })};
  

async function editDep() {
  const urlParams = new URLSearchParams(window.location.search);
  const depId = urlParams.get('id');

  const newDepName = document.getElementById("inpDepName").value;
  const NewManager = document.getElementById("depOpt").value;


  axios.put(`http://localhost:3000/department/${depId}`, {
    name: newDepName,
    Manager: NewManager,
  
  })
    .then((response) => {
      console.log('Data successfully updated:', response.data);
      window.location.href = '/departmentspage'
      // Add any further handling of the response here
    })
    .catch((error) => {
      console.error('Error updating data:', error);
      // Add error handling here
    });
}