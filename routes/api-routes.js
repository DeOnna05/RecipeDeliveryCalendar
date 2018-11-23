const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models');
const config = require('../config.js');
const dotenv = require('dotenv');
dotenv.config();

let token = ""
//New user creation route
router.post('/api/newUser', function(req, res) {
    db.users.find({username : req.body.username}).then(user => {
       
        if(user.length == 0){
            const hashedPassword = bcrypt.hashSync(req.body.password, 8);
            let newUser = req.body;
            newUser.password = hashedPassword;
           
            db.users.create(newUser).then(function (data) {
                 let token = jwt.sign({ id: data._id }, process.env.SECRET , {
                    expiresIn: 86400 // expires in 24 hours
                  });
                  
                  res.status(200).send({ auth: true, token: token });
            }).catch(function (error) {
                    res.json(error)
            })
        }else {
            res.json({status: "User already exists"});
        }
    })
   
});

router.get('/api/user', function(req, res) {
    res.json({
        message: 'get user route'
    });
});

router.get('/api/login', function(req,res){
    let token = req.headers['x-access-token'];
    console.log(req.body)
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      
      res.status(200).send(decoded);
    });
  });


//new recipe post route
router.post('/api/newRecipe', function(req, res) {
    console.log(req.body);
    db.recipes.create(req.body).then(function(data){
        res.json(data);
    })
    .catch(function(error){
        res.json(error)
    });
});

module.exports = router;
