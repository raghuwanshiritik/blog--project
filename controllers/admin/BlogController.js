const BlogModel = require('../../models/Blog')
var cloudinary = require('cloudinary').v2;


cloudinary.config({ 
    cloud_name: 'dc0gwhni7', 
    api_key: '634834669551983', 
    api_secret: 'JDoQnFwslhFE5g_FwFpIn30XQBk',
    // secure: true
  });

class BlogController {

    static displayBlog =async (req, res) => {

 try{

    const data = await BlogModel.find()
    // console.log(data)
    res.render('admin/blog/display',{d:data})
    
 }catch(error){
    console.log(error)
 }

    }

    

////
static insertblog= async(req,res)=>{
    try{
//   console.log(req.body)
// console.log(req.files.image)
const file = req.files.image
const myimage = await cloudinary.uploader.upload(file.tempFilePath,{
    folder:'blogImage'
})
const result = new BlogModel({
      title: req.body.  title,
    description: req.body.description,
    image:{
        public_id: myimage.public_id,
        url: myimage.secure_url
    }
})
await result.save()
//route url
 res.redirect('/admin/blogdisplay')
    }catch(error){
console.log(error)
    }
}








    static blogview =async(req,res)=>{
        try{
            const result =await BlogModel.findById(req.params.id)
            //console.log(result)
            res.render('admin/blog/view',{view:result})
        }
        catch(error){
            console.log(error)
        }
    }

    static blogEdit =async(req,res)=>{
        try{
            const result =await BlogModel.findById(req.params.id)
            //console.log(result)
            res.render('admin/blog/edit',{edit:result})

        }
        catch(error){
            console.log(error)
        }
    }

    static blogUpdate = async(req,res)=>{
        
        try{
            if (req.files) {
            // console.log(req.body)
            // console.log(req.params.id)

            //first delete the image
            const blog = await BlogModel.findById(req.params.id)
            const imsageid =blog.image.public_id
        //   console.log(imageid)
        await cloudinary.uploader.destroy(imsageid)
       
        //second update the image
        const file = req.files.image
        const myimage = await cloudinary.uploader.upload(file.tempFilePath,{
          folder:'blogImage'
        })

            const update = await BlogModel.findByIdAndUpdate(req.params.id,{
                  title: req.body.  title,
                description: req.body.description,
                image: {
                    public_id: myimage.public_id,
                    url: myimage.secure_url
                }
            })

            await update.save()
            res.redirect('/admin/blogdisplay')
    } else {
        const update = await BlogModel.findByIdAndUpdate(req.params.id,{
            title: req.body.  title,
            description: req.body.description,
        })
        await update.save()
        res.redirect('/admin/blogdisplay')
    }
        }
        catch (error){
      console.log(error)
        }
    }
   

    static blogdelete = async(req,res)=>{
        
        try{
            //delete image code
        const blog = await BlogModel.findById(req.params.id)
        const imsageid =blog.image.public_id
    //   console.log(imageid)
    await cloudinary.uploader.destroy(imsageid)

           await BlogModel.findByIdAndDelete(req.params.id,)
           
               res.redirect('/admin/blogdisplay')
            }
            
        catch (error){
      console.log(error)
        }
    }


}
module.exports =BlogController
