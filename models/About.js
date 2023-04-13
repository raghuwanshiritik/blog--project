const mongoose = require('mongoose')



//define schema or(field)
const AboutSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    image:{
        public_id:{
            type:String
        },
        url:{
                type:String
        }
    }

},{timestamps:true})



//create collection
//where about is a collection name
//aboutschema is the field of about collection
const AboutModel = mongoose.model('about',AboutSchema)

module.exports =AboutModel