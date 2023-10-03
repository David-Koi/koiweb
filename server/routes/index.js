const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.status(200).json({
        titulo:"server ok",
        nombre:'portfolioserver ON',
    });
});

module.exports = router;