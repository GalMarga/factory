const rul = 'http://localhost:3000/user';

async function login() {
    axios.get(rul)
      .then(function (response) {
        let data = response.data;
        console.log('user: ', data);
      })

      const userName = document.getElementById("userNameInp").value
      console.log('userName: ', userName);
      const password = document.getElementById("passInp").value
      console.log('password: ', password);
 
    }