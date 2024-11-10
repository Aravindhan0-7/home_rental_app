const mongoose = require('mongoose');

const connectionOfDb = () => {
  mongoose
    .connect("mongodb+srv://aravi:Shaara07@cluster0.3oqec.mongodb.net/test?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      throw new Error(`Could not connect to MongoDB: ${err}`);
    });
};

module.exports = connectionOfDb;