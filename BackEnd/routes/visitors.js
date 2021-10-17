const router = require("express").Router();
let RailStation = require("../models/checkIns");

router.route("/add").post((req,res) => {
    const nic = req.body.nic;
    const telnumber = Number(req.body.telnumber);

    const newVisitor = new RailStation({
        nic,
        telnumber
    })

    newVisitor.save().then(() => {
        res.json("Visitor added")
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/").get((req,res) => {
    RailStation.find().then((visitors) => {
        res.json(visitors)
    }).catch((err) => {
        console.log(err)
    })
})

// router.route("/get/:nic").get(async (req, res) => {
//     let nic = req.body.nic;
//     // const Visitor = 
//     await RailStation.findOne(nic).then(() => {
//     console.log(res.data);
//        // res.status(200).send({status: "User fetched", user : Visitor})
//     }).catch((err) => {
//         console.log(err.message);
//         res.status(500).send({status: "Error in user fetching", error: err.message});
//     })
// })

// app.get('/search', (req, res) => {
//     try{
//         RailStation.find({$or:[{nic:{'$regex':req.query.dsearch}},{telnumber:{'$regex':req.query.dsearch}}]},(err,data) => {
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log(err.message);
//             }
//         })
//     }
// })



module.exports = router;


// app.get('/search',(req,res)=>{  
// try {  
// bookModel.find({$or:[{author:{'$regex':req.query.dsearch}},{books:{'$regex':req.query.dsearch}}]},(err,data)=>{  
// if(err){  
// console.log(err);  
// }else{  
// res.render('pages/home',{data:data});  
// }  
// })  
// } catch (error) {  
// console.log(error);  
// }  
// });
