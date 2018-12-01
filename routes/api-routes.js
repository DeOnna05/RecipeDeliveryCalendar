const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models');
const config = require('../config.js');
const dotenv = require('dotenv');
const VerifyToken = require('../client/src/components/VerifyToken');
dotenv.config();

//New user creation route
router.post('/api/newUser', function(req, res) {
    db.users.find({username : req.body.username}).then(user => {
       
        if(user.length == 0){
            const hashedPassword = bcrypt.hashSync(req.body.password, 8);
            let newUser = req.body;
            newUser.password = hashedPassword;
           
            db.users.create(newUser).then(function (data) {
                  
                  res.status(200)
            }).catch(function (error) {
                    res.json(error)
            })
        }else {
            res.json({status: "User already exists"});
        }
    })   
});

router.get('/api/user', VerifyToken, function(req, res, next) {
    db.users.findById(req.userId, {password: 0}, function (error, user) {
        console.log(req.userId)
      if (error) return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");      
      res.status(200).send(user);
    });
  });

router.post('/api/login', function(req,res){
    db.users.findOne({username: req.body.username}, function(err, user){
        console.log(user, "this is the user");
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');
        let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
        let token = jwt.sign({ id: user._id }, config.secret, {
          expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token });
      });    
  });

  router.get('/api/logout', function(req, res) {
    res.status(200).send({ auth: false, token: null });
  });

//new recipe post route
router.get('/api/recipes',  function(req, res) {
    //Check if there is a token - check header for token
    db.recipes.find({}).then(function(data){
        console.log("ds", data)
        res.json(data);
    })
    .catch(function(error){
        console.log(error)
        res.json(error)
    });
});

module.exports = router;
