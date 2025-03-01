var express = require('express');
const { route } = require('./admin');
var router = express.Router();
const NotificationModel = require('../model/Notification')
var fileModel = require('../model/FileModel')

/* GET home page. */
router.get('/',  async function(req, res, next) {
  try {
    let previousWorks =  await fileModel.find({category:'Committee'})
    let Interior = await fileModel.find({category:'celebrations'})
    let Genaral =await NotificationModel.find({category:'Genaral'})
    let Special =await NotificationModel.find({category:'Special'})

    console.log(previousWorks,Genaral,Special,"data from index")
    console.log(Interior,"interior")
     res.render('user/index', { previousWorks,Interior,Genaral,Special});
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
});
router.get('/About',(req,res)=>{
    res.render('user/about')
})
router.get('/contact',(req,res)=>{
  res.render('user/contact')
})
router.get('/card',(req,res)=>{
  res.render('user/card')
})
router.get('/interior', async(req,res)=>{
  try {
    console.log("interior-----------")
    let Genaral =await NotificationModel.find({category:'Genaral'})
    let Special =await NotificationModel.find({category:'Special'})

    console.log(Genaral,Special,"data from interiour")
    res.render('user/property-grid',{Genaral,Special})
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
})
module.exports = router;
