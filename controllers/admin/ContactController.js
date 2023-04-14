const ContactModel = require('../../models/Contact')

class ContactController{

    static displaycontact = async (req,res)=>{

        try{
            const display = await ContactModel.find()
            //console.log(display)
            res.render('admin/Contact/display',{d:display})
        }
        catch(error){
            console.log(error)
        }
    }


  static contactInsert = async (req,res) =>{
    // console.log(req.body)
    try{
        const insert = await new ContactModel({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            message: req.body.message
        })

         await insert.save()
         res.redirect('/Contacts')
    }
    catch(error){
        console.log(error)
    }
  }

}
module.exports=ContactController