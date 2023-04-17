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
router.post('/insertBlog',auth,BlogController.insertblog)
router.get('/Blogview/:id',auth,BlogController.blogview)
router.get('/admin/blogedit/:id',auth,BlogController.blogEdit)
router.post('/Blogupdate/:id',auth,BlogController.blogUpdate)
router.get('/admin/Blogdelete/:id',auth,BlogController.blogdelete)

//categories controller
router.get('/admin/Categoriesdisplay',auth,CategoriesController.displayCategories)
router.post('/insertCategories',auth,CategoriesController.insertcategories)
router.get('/Categoriesview/:id',auth,CategoriesController.categoriesview)
router.get('/admin/Categoriesedit/:id',auth,CategoriesController.categoriesEdit)
router.post('/Categoriesupdate/:id',auth,CategoriesController.categoriesUpdate)
router.get('/admin/Categoriesdelete/:id',auth,CategoriesController.categoriesdelete)


//About Controller
router.get('/admin/Aboutdisplay',auth,AboutController.displayabout)
router.post('/insertAbout',auth,AboutController.insertabout)
router.get('/admin/Aboutedit/:id',auth,AboutController.aboutEdit)
router.post('/Aboutupdate/:id',auth,AboutController.aboutUpdate)
router.get('/admin/Aboutdelete/:id',auth,AboutController.aboutdelete)

//contact controller
router.get('/admin/Contactdisplay',auth,ContactController.displaycontact)
router.post('/insertContact',ContactController.contactInsert)

//logout controller
router.get('/admin/logutdisplay',LogoutController.displaylogout)




//teacher routes
router.get('/teacher/display',TeacherController.display)
router.get('/teacher/create',TeacherController.create)


module.exports =router

