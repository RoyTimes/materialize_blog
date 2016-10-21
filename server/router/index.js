import express from 'express';
let router = express.Router();

import HandleErrorIfAny from '../util/error'

router.get('/', (req, res) => {
	res.json({
		status: 1, msg: "API Server Running ... ",
		data: {}
	});
});
export default router;
