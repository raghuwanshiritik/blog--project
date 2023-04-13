const mongoose =require('mongoose')



//define schema or(field)
const CategoriesSchema = new mongoose.Schema({

    cat_name:{
        type:String,
        required:true
    },
   
},{timestamps:true})



//create collection
//where category is a collection name
//categoryschema is the field of category collection
const CategoriesModel = mongoose.model('category',CategoriesSchema)

module.exports =CategoriesModel