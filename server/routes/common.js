import express from "express";
import quoteCtrl from '../controllers/quoteCtrl';

const router = express.Router();

router.get('/', quoteCtrl.newQuote);

module.exports = router;