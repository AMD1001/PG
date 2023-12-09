const mongoose=require('mongoose');

var mongoURL='mongodb+srv://mdhumal68:IWkfzceeGeUIoHLe@cluster0.pc4xptb.mongodb.net/mern-rooms'

mongoose.connect(mongoURL,{useUnifiedTopology : true , useNewURLParser : true})

var connection = mongoose.connection

connection.on('error',()=>{
    console.log('Mongo DB Connection Failed')
})

connection.on('connected',()=>{
    console.log('Mongo DB Connection Successful')
})

module.exports=mongoose;