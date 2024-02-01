const { MongoClient } = require('mongodb');

 
async function run() {
  try {
   const uri = 'mongodb+srv://galmarga10:MongoMarga@cluster0.looci2s.mongodb.net/?retryWrites=true&w=majority'
    const client = new MongoClient(uri); // Declare client within the function
    await client.connect();

    const database = client.db("factory");

    // Create collection if it doesn't exist
    await database.createCollection("user");
    await database.createCollection("employees");
    await database.createCollection("Department");
    await database.createCollection("shifts");
    await database.createCollection("employee_shift");
    
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.close();
  }
}

run().catch(console.error);
