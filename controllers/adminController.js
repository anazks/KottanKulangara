const FileModel = require('../model/FileModel')
const filesModel = require('../model/FileModel')
const notificationModel = require('../model/Notification')
const getLogin = (req,res)=>{
        try {
            console.log("reached controllers")
            res.render("Admin/Login")
        } catch (error) {
            console.log(error)
            res.render("Admin/Login")
        }
}
const getHome = async (req,res)=>{
    try {
        let files = await filesModel.find({})
    //    res.render('Admin/Home',{files}) 
        let notifications = await notificationModel.find({})
        console.log(files,notifications)
       res.render('Admin/Home',{files,notifications}) 
    } catch (error) {
        res.render('Admin/Home')  
    }
}
const adminLogin = async(req,res)=>{
    try {
        console.log(req.body)
        let {userName} = req.body;
        let {password} = req.body;
        let {
            
        } = req.body;
        if(userName =="jayan@admin.com" && password == "jayan@123"){
            res.render('Admin/Home')  
        }else{
            res.redirect('/') 
        }
    } catch (error) {
        console.log(error)
    }
}
const deleteFile = async (req,res)=>{
    try {
        let {id} = req.params
        let deleteid = await filesModel.findByIdAndDelete({_id:id})
        res.redirect('/admin/Home')
    } catch (error) {
        console.log(error)
        res.redirect('/admin/Home')
    }
}
const deleteAnnounce = async (req,res)=>{
    try {
        let {id} = req.params
        let deleteid = await notificationModel.findByIdAndDelete({_id:id})
        res.redirect('/admin/Home')
    } catch (error) {
        console.log(error)
        res.redirect('/admin/Home')
    }
}
const update = async (req,res)=>{
    try {
        let {id} = req.params;
        let FilefromDb = await filesModel.findById({_id:id})
        console.log(FilefromDb,"---")
        res.render('admin/updateform',{FilefromDb})
    } catch (error) {
        console.log(error)
        res.render('admin/home')
    }
}
const updateFiles = async (req, res) => {
    try {
        let id = req.body.id;
        let updateData = req.body;
        let file = req.files ? req.files.image : null; // Check if a new file is uploaded

        // Update the document in the database
        let updatedFiles = await FileModel.findByIdAndUpdate(id, updateData);

        // If a new file is uploaded, replace the existing file
        if (file) {
            // Define the path for the new image
            const imagePath = `./public/images/uploadIMG/${updatedFiles._id}.jpg`;

            // Replace the file
            file.mv(imagePath, (err) => {
                if (err) {
                    console.error("File replacement error:", err);
                    return res.status(500).send("An error occurred while replacing the file.");
                }

                // If file is successfully replaced, redirect
                res.redirect('/admin/home');
            });
        } else {
            // If no new file is uploaded, simply redirect
            res.redirect('/admin/home');
        }

    } catch (error) {
        console.error("Update error:", error);
        res.redirect('/admin');
    }
};

const addFiles =async (req,res)=>{
    try {
        console.log("adding function")
       console.log(req.body,req.files)
       let { category } = req.body;
       let {image} = req.files;
       let uploadedFileData = await filesModel.create(req.body)
       image.mv('./public/images/uploadIMG/'+uploadedFileData._id+".jpg").then((err)=>{
        if(!err){
          res.redirect('/admin/home')
        }
       })
    } catch (error) {
        console.log(error)
        res.redirect('/admin')
    }
}
const   addNotifications = async (req,res)=>{
    try {
        console.log("adding notification")
        console.log(req.body)
        // let { description,category } = req.body;
        let notification = await notificationModel.create(req.body)
        console.log(notification,"-----------------------add")
        res.redirect('/admin/home') 
    } catch (error) { 
        console.log(error
            )
        res.redirect('/admin/home') 
    }
}
module.exports = {getLogin,getHome,addFiles,adminLogin,deleteFile,update,updateFiles,addNotifications}

// const getAnnouncement = async (req,res)=>{
//     try {
//         let notifications = await notificationModel.find({})
//         res.render('admin/Announcement',{notifications})
//     } catch (error) {
//         res.render('admin/Announcement')
//     }
// }
module.exports = {getLogin,getHome,addFiles,adminLogin,deleteFile,update,updateFiles,addNotifications,deleteAnnounce}