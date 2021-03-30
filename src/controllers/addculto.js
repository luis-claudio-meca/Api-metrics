const express = require('express')

const Culto = require('../models/Culto')

const router = express.Router()

router.post('/register', async(req , res) =>{

    try{
        const culto = await Culto.create(req.body)

        return res.send({culto})
    }catch(err){

        return res.status(400).send({ error : err.message})
    }
})
router.get('/geral', async(req , res) =>{

    try{
        const geral = await Culto.find({})
        

        return res.send({geral});
    }catch(err){

        return res.status(400).send({ error : err.message})
    }
})

module.exports = app => app.use('/culto', router);