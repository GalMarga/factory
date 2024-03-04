
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

    })
    .catch((error) => {
      console.error('Error updating data:', error);
    
    });
}