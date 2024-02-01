const mongoose = require('mongoose');

const databaseName = 'factory';
// const collectionName = 'user';

mongoose.connect(`mongodb+srv://galmarga10:MongoMarga@cluster0.looci2s.mongodb.net/${databaseName}?retryWrites=true&w=majority`, {
});

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB database: ${databaseName}`);
});
// mongoose.connection.on('error', (err) => {
//   console.error('Failed to connect to MongoDB', err);
//   // Add your code here for handling the connection error
// });
