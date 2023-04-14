const express = require('express')
const AboutController = require('../controllers/admin/AboutController')
const AdminController = require('../controllers/admin/AdminController')
const BlogController = require('../controllers/admin/BlogController')
const CategoriesController = require('../controllers/admin/CategoriesController')
const ContactController = require('../controllers/admin/ContactController')
const LogoutController = require('../controllers/admin/LogoutController')
const router = express.Router()
const FrontController = require('../controllers/FrontController')
const TeacherController = require('../controllers/TeacherController')
const auth = require('../middleware/auth')


    


//router//path
//front controller routing
router.get('/',FrontController.home)//method
router.get('/about',FrontController.about)
router.get('/header',FrontController.header)
router.get('/login',FrontController.login)
router.get('/blog',FrontController.blog)
router.get('/contacts',FrontController.contacts)
router.get('/footer',FrontController.footer)
router.get('/blogdetail/:id',FrontController.blogdetail)
router.get('/register',FrontController.register)


//admin controller
router.get('/admin/dashboard',auth,AdminController.dashboard)
router.post('/adminregister',AdminController.register)
router.post('/verifylogin',AdminController.verifylogin)
router.get('/logout',AdminController.logout)


//blog controller
router.get('/admin/Blogdisplay',auth,BlogController.displayBlog)
router.post('/insertBlog',BlogController.insertblog)
router.get('/Blogview/:id',BlogController.blogview)
router.get('/admin/blogedit/:id',BlogController.blogEdit)
router.post('/Blogupdate/:id',BlogController.blogUpdate)
router.get('/admin/Blogdelete/:id',BlogController.blogdelete)

//categories controller
router.get('/admin/categoriesdisplay',auth,CategoriesController.displayCategories)
router.post('/insertcategories',CategoriesController.insertcategories)
router.get('/categoriesview/:id',CategoriesController.categoriesview)
router.get('/admin/categoriesedit/:id',CategoriesController.categoriesEdit)
router.post('/categoriesupdate/:id',CategoriesController.categoriesUpdate)
router.get('/admin/categoriesdelete/:id',CategoriesController.categoriesdelete)


//About Controller
router.get('/admin/aboutdisplay',auth,AboutController.displayabout)
router.post('/insertabout',AboutController.insertabout)
router.get('/admin/aboutedit/:id',AboutController.aboutEdit)
router.post('/aboutupdate/:id',AboutController.aboutUpdate)
router.get('/admin/blogdelete/:id',AboutController.aboutdelete)

//contact controller
router.get('/admin/contactdisplay',auth,ContactController.displaycontact)
router.post('/insertcontact',ContactController.contactInsert)

//logout controller
router.get('/admin/logutdisplay',LogoutController.displaylogout)




//teacher routes
router.get('/teacher/display',TeacherController.display)
router.get('/teacher/create',TeacherController.create)


module.exports =router

