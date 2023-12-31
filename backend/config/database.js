const mongoose = require("mongoose") // importing

// connection establising
const connectDatabase = () => {
    
    mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true}).then((data)=>{
    console.log(`mongodb connected with server:${data.connection.host}`)
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDatabase