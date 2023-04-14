const mongoose  =require('mongoose')
// const url = "mongodb://127.0.0.1:27017/blogproject"
const live_Url = "mongodb+srv://ritikraghuwanshi987:ritik@cluster0.pawq7fi.mongodb.net/blogproject?retryWrites=true&w=majority"


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
