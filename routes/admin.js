var express = require('express');
var router = express.Router();
const { getLogin,getHome,addFiles,adminLogin,deleteFile,update,updateFiles,addNotifications,deleteAnnounce,getAnnouncement} = require('../controllers/adminController')
/* GET users listing. */
router.get('/',getLogin);
router.get('/Home',getHome);
router.get('/delete/:id',deleteFile)
router.get('/update/:id',update)
router.post('/adminLogin',adminLogin)
router.post('/addFiles',addFiles)
router.post('/updateFile',updateFiles)
router.post('/addNotifications',addNotifications)
router.get('/deleteAnnounce/:id',deleteAnnounce)
// router.get('/getAllAnnouncemnet',getAnnouncement)
module.exports = router;
