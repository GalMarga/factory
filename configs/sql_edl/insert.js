const { MongoClient } = require('mongodb');

 
async function run() {
  try {
   const uri = 'mongodb+srv://galmarga10:MongoMarga@cluster0.looci2s.mongodb.net/?retryWrites=true&w=majority'
    const client = new MongoClient(uri); // Declare client within the function
    await client.connect();

    const database = client.db("factory");

   
    const collectionUser = database.collection("user");
    
     // Insert user
    await collectionUser.insertMany([
      { id: "01", fullName: "Gal Marga", userName: "Galm", pass: "123" , numOfActions: 10 },
      { id: "02", fullName: "Otis Farrell", userName: "Otis", pass: "1234" , numOfActions: 5 },
      { id: "03", fullName: "Ellie-Mae Rogers", userName: "Ellie", pass: "12345" , numOfActions: 8 },
      { id: "04", fullName: "Mikayla Perry", userName: "Mikayla", pass: "1234567" , numOfActions: 2 },
      
    ]);
    

    // Insert dep
    const collectionDep = database.collection("Department");
    await collectionDep.insertMany([
      { idDep: "01", name: "Production", Manager: "Gal Marga" },
      { idDep: "02", name: "Quality", Manager: "Gal Marga" },
      { idDep: "03", name: "Maintenance", Manager: "Gal Marga" },
      
    ]);
    

    // Insert emp
    const collectionEmp = database.collection("employees");
    await collectionEmp.insertMany([
      { empId: "01", firstName: "Ga", lastName: "Marga", startYear: "2002" , epartmentID: 2 },
      { empId: "02", firstName: "Otis", lastName: "Farrell", startYear: "2004" , epartmentID: 2 },
      { empId: "03", firstName: "Ellie-Mae", lastName: "Rogers", startYear: "2009" , epartmentID: 2 },
      { empId: "04", firstName: "Mikayla", lastName: "Perry", startYear: "2020" , epartmentID: 2 },
      
    ]);
   

      // Insert shifts
      const collectionSft = database.collection("shifts");
      await collectionSft.insertMany([
        { idSft: "01", date: "", startTime: "", endTime: "" , NumOfActions: 0 },
        
      ]);
  
      
       // Insert EmpSft
       const collectionEmpSft = database.collection("employee_shift");
       await collectionEmpSft.insertMany([
         { idEmpSft: "01", employeeID: "", shiftID: "", endTime: "" , NumOfActions: 0 },
         
       ]);
       


  } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.close();
  }
}

run().catch(console.error);
