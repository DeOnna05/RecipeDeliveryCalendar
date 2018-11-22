const express = require('express');
const router = express.Router();
const db = require('../models');

//New user creation route
router.post('/api/newUser', function(req,res){
    console.log(req.body)
    db.users.create(req.body).then(function(data){
        res.json(data)
    })
    .catch(function(error){
        res.json(error)
    })
});

    router.post('/getToken', function(req,res){
        console.log(req.body)
        // db.users.create(req.body).then(function(data){
        //     res.json(data);
        })
        .catch(function(error){
            res.json(error)
        });
    // });


    //   if(user.username!=req.body.username){
    //     res.json('Incorrect username')
    //   }else{
    //       if(user.password!=req.body.password){
    //         res.json('Incorrect password')
    //           break;
    //       }
    //       else{
    //         res.json('Successfully logged in')
    //           break;
    //       }         
    //   }
    // }
    // res.json('LOGGED IN');
// });


module.exports = router;
