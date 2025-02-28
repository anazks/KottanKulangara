const mongoose = require("mongoose");

const connect = (DB_Name) => {
    console.log(DB_Name,"db name")
    return mongoose.connect(`mongodb+srv://user:123@cluster0.kop4wrn.mongodb.net/${DB_Name}?retryWrites=true&w=majority&appName=Cluster0`)
}
  
module.exports = connect;