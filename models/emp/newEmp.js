
const rul = 'http://localhost:3000/department';

async function getDepName() {
    await axios.get(rul)
   .then( function(response) {
    let data = response.data 
    
    const depSelect = document.getElementById("depOpt")
    data.forEach( item => {

        console.log(item.name);
        let createOpt = document.createElement("option")
        createOpt.innerHTML = item.name
        createOpt.value = item.name

        depSelect.appendChild(createOpt)
    
    });
   })
}