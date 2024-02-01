document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting normally
  
    // Form validation
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var userName = document.getElementById('userName').value;
    var password = document.getElementById('password').value;
    var startYear = document.getElementById('startYear').value;
    var numOfActions = document.getElementById('numOfActions').value;
  
    if (firstName === '' || lastName === '' || startYear === '' || numOfActions === '') {
      alert('Please fill in all fields for employee');
      return;
    }
  
    // Make a request to the server for employee data using Axios
    var employeeData = {
      firstName: firstName,
      lastName: lastName,
      startYear: startYear,
      numOfActions: numOfActions
    };
    axios.post('http://localhost:3000/employees', employeeData)
      .then(response => {
        // Handle the response data
        console.log(response.data);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  
    if (userName === '' || password === '') {
      alert('Please fill in all fields for user');
      return;
    }
  
    // Make a request to the server for user data using Axios
    var userData = {
      userName: userName,
      password: password
    };
    axios.post('http://localhost:3000/user', userData)
      .then(response => {
        // Handle the response data
        console.log(response.data);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  });