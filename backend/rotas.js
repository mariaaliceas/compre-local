import express from 'express';


const router = express.Router();

router.post('/login', login);

router.post('/cadastro', cadastro);


// will match any other path
router.use('/', (req, res, next) => {
    res.status(404).json({error : "page not found"});
});

export default router;