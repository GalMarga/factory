const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://galmarga10:MongoMarga@cluster0.looci2s.mongodb.net/?retryWrites=true&w=majority';

async function connectDB() {

    const client = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { console.log(err); });
        
    if (!client) {
        return;
    }
    try {
        const db = client.db("factory");
      //   let collection = db.collection('user');
      console.log("Connect!")

    } catch (err) {

        console.log(err);  
}}

module.exports = {
   connectDB
}