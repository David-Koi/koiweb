const express = require('express');
const router = express.Router();
const mainController = require('../controllers/maincontroller');

// router.get('/', (req, res)=>{
//     res.status(200).json({
//         titulo:"server ok",
//         nombre:'portfolioserver ON',
//     });
// });

//checkDDBB
router.get('/', mainController.checkDataBase);


module.exports = router;