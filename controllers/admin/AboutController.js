const AboutModel = require('../../models/About')
var cloudinary = require('cloudinary').v2;


cloudinary.config({ 
    cloud_name: 'dc0gwhni7', 
    api_key: '634834669551983', 
    api_secret: 'JDoQnFwslhFE5g_FwFpIn30XQBk',
    // secure: true
  });

class AboutController {

    static displayabout =async (req, res) => {
    //  res.render('admin/about/aboutdisplay')

  try{

   const data = await AboutModel.find()   
   // console.log(data)
     res.render('admin/about/display',{d:data})
    
  }catch(error){
     console.log(error)
  }

   }

    static insertabout = async (req, res) => {
         //   console.log(req.files.image)
         const file = req.files.image
         const myimage = await cloudinary.uploader.upload(file.tempFilePath,{
           folder:'aboutImage'
         })
        try {
              const result = new AboutModel({
                title: req.body.title,
                description: req.body.description,
                image: {
                    public_id: myimage.public_id,
                    url: myimage.secure_url
                }
              })

              await result.save()
               res.redirect('/admin/aboutdisplay')
        }catch (error) {
            console.log(error)
        }

    }


    static aboutEdit =async(req,res)=>{
        try{
            const result =await AboutModel.findById(req.params.id)
            //console.log(result)
            res.render('admin/about/edit',{edit:result})

        }
        catch(error){
            console.log(error)
        }
    }

    // static aboutUpdate = async(req,res)=>{
        
    //     try{
          

    //         const update = await AboutModel.findByIdAndUpdate(req.params.id,{
    //             title: req.body.title,
    //             description: req.body.description,
    //         })

    //         await update.save()
    //         res.redirect('/admin/aboutdisplay')
    //     }
    //     catch (error){
    //   console.log(error)
    //     }
    // }
   

    static aboutUpdate = async(req,res)=>{
        
        try{
            //first delete the image
            const about = await AboutModel.findById(req.params.id)
            const imsageid =about.image.public_id
        //   console.log(imageid)
        await cloudinary.uploader.destroy(imsageid)
       
        //second update the image
        const file = req.files.image
        const myimage = await cloudinary.uploader.upload(file.tempFilePath,{
          folder:'aboutImage'
        })

            const update = await AboutModel.findByIdAndUpdate(req.params.id,{
                title: req.body.title,
                description: req.body.description,
                image: {
                    public_id: myimage.public_id,
                    url: myimage.secure_url
                }
            })

            await update.save()
            res.redirect('/admin/aboutdisplay')
        }
        catch (error){
      console.log(error)
        }
    }
   
    static aboutdelete = async(req,res)=>{
        
      try{
          //delete image code
      const about = await AboutModel.findById(req.params.id)
      const imsageid =about.image.public_id
  //   console.log(imageid)
  await cloudinary.uploader.destroy(imsageid)

         await AboutModel.findByIdAndDelete(req.params.id,)
         
             res.redirect('/admin/aboutdisplay')
          }
          
      catch (error){
    console.log(error)
      }
  }


}
module.exports = AboutController
