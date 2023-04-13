const BlogModel = require("../models/Blog")
const CategoriesModel = require("../models/Categories")
const AboutModel = require("../models/About")
const ContactModel = require("../models/Contact")

class FrontController{

  static home = async(req,res)=>{

    try{
      const blogs = await BlogModel.find().sort({_id:-1}).limit(6)
      console.log(blogs)
      res.render('home',{b:blogs})
    }
    catch(error){
    console.log(error)
    }
  }

  static about = async(req,res)=>{
    // res.render('about')
    try{
      const about = await AboutModel.find()
      console.log(about)
      res.render('about',{b:about})
    }
    catch(error){
      console.log(error)
    }
  }
  

  static header =(req,res)=>{
    res.render('header')
  }
  

  static blog = async (req,res)=>{
    // res.render('blog')
    try{
      const blogs = await BlogModel.find().sort({_id:-1})
      //console.log(blog)
      res.render('blog',{b:blogs})
    }
    catch(error){
      console.log(error)
    }
  }

  static contacts =(req,res)=>{
    res.render('contacts')
  }


  
 

  static footer =(req,res)=>{
    res.render('footer')
  }

  static blogdetail = async(req,res) =>{
    try{
      const categories =await CategoriesModel.find().sort({_id:-1}).limit(6)
      const recentblog = await BlogModel.find().limit(6).sort({_id:-1}).limit(6)
      const result =await BlogModel.findById(req.params.id);
      console.log(result)
      res.render("blogdetail",{r:result,recentblog:recentblog,cat:categories});
    }
    catch(error){
      console.log(error)
    }
  }

  //admin login

  static login = async(req,res) =>{
    try{
      res.render('login',{message:req.flash('error')})
    }
    catch(error){
      console.log(error)
    }
  }
 
  static register= async(req,res)=>{
  
    try{
      res.render('register',{message:req.flash('error')})

    }

    catch(error){
      console.log(error)
    }
  }






  // static admininsert=async(req,res)=>{
  //   try{
  //     console.log(req.body)
  //     const{name,email,password,cpassword}=res.body

  //     const result =new AboutModel({
  //       name:name,
  //       email:email,
  //       passwaord:password
  //     })
  //     await result.save();
  //     res.redirect("/login ")
  //   }
  //   catch(error){
  //     console.log(error)
  //   }
  // }

}

module.exports=FrontController