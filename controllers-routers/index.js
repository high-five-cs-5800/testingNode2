import express from 'express';
import data from '../src/testData';

const router = express.Router();

//usee http://localhost:8080/api/contests to test this link
router.get('/testing', (req, res, next) => {
    res.render('testing',
        {
                title: 'Cool, hun', 
                condition: true, 
                anyArray: [1, 2, 3] 
        }
    );
});

router.get('/testing2/:id/', function(req, res, next){
    res.render('testing1', {output: req.params.id});
});
router.get('/testing1', function(req, res, next){
    res.render('testing-submit', {output: req.params.id});
});

router.post('/testing/submit', function(req, res, next){
    data: req.body;
    //console.log(data);
    var id = 2;
    res.redirect('/webController/testing/');
});
//res.send({ contests: data.contests });

export default router;