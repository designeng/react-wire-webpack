import { Router } from 'express';
let router  = Router();
import React from 'react';
import ReactDOMServer from 'react-dom/server';

router.get('/main', (req, res) => {
    res.send("mainHandler");
})

export default router;

