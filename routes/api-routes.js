const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const db = require('../models');

//New user creation route
router.post('/api/newUser', function(req, res) {
    console.log(req.body)
    db.users.create(req.body).then(function (data) {
        res.json(data)
    }).catch(function (error) {
            res.json(error)
        })
});

router.get('/api', function(req, res) {
    res.json({
        message: 'API Get Route'
    });
});

router.post('/api/newRecipe', function(req, res) {
    // console.log(req.body);
    res.json({
        message: 'New Recipe Post Route'
    });
    // db.users.create(req.body).then(function(data){
    //     res.json(data);
    // })
    // .catch(function(error){
    //     res.json(error)
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

router.post('/api/login', function(req, res){
    jwt.sign()
})
module.exports = router;
