

const rul = 'http://localhost:3000/employees';

async function getDataForShift()
{

    axios.get(rul)
    .then(function (response) {
      let data = response.data;

     


    data.forEach(item => {

     
        console.log("🚀 ~ file: ShiftGetData.js:22 ~ item.firstName:", item.firstName);


    
    });

       

        

    

    })
}