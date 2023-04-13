const mongoose  =require('mongoose')
const url = "mongodb://127.0.0.1:27017/blogproject"
const live_Url = "mongodb+srv://ritikraghuwanshi987:ritikraghuwanshi@cluster0.d7in6ir.mongodb.net/blog1?retryWrites=true&w=majority"


const connectdb =()=>{
    return mongoose.connect(live_Url)



    .then(()=>{
        console.log('Database connected..')
    })
    .catch((error)=>{
        console.log(error)
    })
}

module.exports =connectdb
