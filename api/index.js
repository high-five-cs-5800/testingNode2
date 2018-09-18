import express from 'express';
import data from '../src/testData';

const router = express.Router();

//usee http://localhost:8080/api/contests to test this link
router.get('/contests', (req, res) => {
  res.send({contests: data.contests });
});
//contests: data.contests });

export default router;