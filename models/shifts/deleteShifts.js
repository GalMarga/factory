async function deleteAllShifts() {

  axios.get(`http://localhost:3000/shifts`)
.then(function (response) {
    const data = response.data
    console.log('data: ', data._id);

    data.forEach(item => { 

  console.log("IDs", item._id)

  axios.delete(`http://localhost:3000/shifts/${item._id}`)
  .then(function (response) {
      const data = response.data
      console.log('data: ', data._id);
    })
    })

    window.location.href = "/ShiftsPage"
})};



