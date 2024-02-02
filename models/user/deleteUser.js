async function deleteAllUser() {

  axios.get(`http://localhost:3000/user`)
.then(function (response) {
    const data = response.data
    console.log('data: ', data._id);

    data.forEach(item => { 

  console.log(item._id)

  axios.delete(`http://localhost:3000/user/${item._id}`)
  .then(function (response) {
      const data = response.data
      console.log('data: ', data._id);
    })
    })
})};


 async function printAllUser() {

  axios.get(`http://localhost:3000/user`)
.then(function (response) {
    const data = response.data
    console.log('Users: ', data);
    })
  }

 

