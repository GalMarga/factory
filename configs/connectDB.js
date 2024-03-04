const mongoose = require('mongoose');

const databaseName = 'factory';

mongoose.connect(`mongodb+srv://galmarga10:MongoMarga@cluster0.looci2s.mongodb.net/${databaseName}?retryWrites=true&w=majority`, {
});

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB database: ${databaseName}`);
});
