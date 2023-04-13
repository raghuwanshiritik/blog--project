const CategoriesModel = require('../../models/Categories')
var cloudinary = require('cloudinary').v2;

class CategoriesController {

    static displayCategories =async (req, res) => {

        try{
       
           const data = await CategoriesModel.find()
           // console.log(data)
           res.render('admin/categories/display',{d:data})
           
        }catch(error){
           console.log(error)
        }
}
    
    static insertcategories = async (req, res) => {
        try {
             console.log(req.body.catname)
        //const result =await CategoriesModel.create(req.body)
        //console.log(result)
        const result =new CategoriesModel({
            cat_name:req.body.cat_name
        })
        await result.save()
        console.log(result)  

        
        }catch (error) {
            console.log(error)
        }

    }

    static categoriesview =async(req,res)=>{
        try{
            const result =await CategoriesModel.findById(req.params.id)
            //console.log(result)
            res.render('admin/categories/view',{view:result})
        }
        catch(error){
            console.log(error)
        }
    }

    static categoriesEdit =async(req,res)=>{
        try{
            const result =await CategoriesModel.findById(req.params.id)
            //console.log(result)
            res.render('admin/categories/edit',{edit:result})

        }
        catch(error){
            console.log(error)
        }
    }

    static categoriesUpdate = async(req,res)=>{
        
        try{

            //  console.log(req.body)
            // console.log(req.params.id)

          const update = await CategoriesModel.findByIdAndUpdate(req.params.id,{
            cat_name: req.body.cat_name,
          })
          await update.save()
           res.redirect('/admin/categoriesdisplay')
            }
            
        catch (error){
      console.log(error)
        }
    }

   

    static categoriesdelete = async(req,res)=>{
        
        try{
           await CategoriesModel.findByIdAndDelete(req.params.id,)
           
               res.redirect('/admin/categoriesdisplay')
            }
            
        catch (error){
      console.log(error)
        }
    }


}
module.exports = CategoriesController
