import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Router api is ready');
});

export default router;