const mongoose = require('mongoose');
const dbURL = 'mongodb://127.0.0.1:27017/test'

const connectDB = async (dbURL) => {
    return  mongoose.connect(dbURL, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true
        })
}

module.exports = connectDB;