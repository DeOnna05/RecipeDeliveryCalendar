const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models');
const config = require('../config.js');
const dotenv = require('dotenv');
dotenv.config();

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

router.post('/api/login', function(req,res){
    db.users.findOne({username: req.body.username}, function(err, user){
        console.log(user, "this is the user");
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');
        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
        var token = jwt.sign({ id: user._id }, config.secret, {
          expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token });
      });
    
  });


//new recipe post route
router.post('/api/newRecipe', function(req, res) {
    console.log(req.body);
    //Check if there is a token
    db.recipes.create(req.body).then(function(data){
        res.json(data);
    })
    .catch(function(error){
        res.json(error)
    });
});

module.exports = router;
