const rul = 'http://localhost:3000/user';

async function login() {
    axios.get(rul)
      .then(function (response) {
        let data = response.data;
        console.log('user: ', data.userName);
      
      const userNameInp = document.getElementById("userNameInp").value
      console.log('userName: ', userNameInp);
      const passwordInp = document.getElementById("passInp").value
      console.log('password: ', passwordInp);

      // let user = await data.findOne({userName: username, pass: password});
      

      data.forEach(user => {

        user.userName
        console.log(' user.userName: ',  user.userName);
      
      if (user.userName == userNameInp & user.pass == passwordInp) {
        console.log("Yes");
      } else {
        console.log("BAD");
      }
        
      });
    })

    }