import express from 'express';
let router = express.Router();

import {
	Author
} from '../util/schema';
import HandleErrorIfAny from '../util/error'

router.get('/all', (req, res) => {
	Author.find({}, (err, docs) => {
		if (err) HandleErrorIfAny(err, req, res);
		else res.json({
			status: 1, data: docs,
			msg: "query success ... " });
	});
});
router.get('/by_id', (req, res) => {
	let {id} = req.query;
	Author.findById(id, (err, doc) => {
		if (err) HandleErrorIfAny(err, req, res);
		else res.json({
			status: 1, data: doc,
			msg: "query success ... " });
	});
});

router.post('/add', (req, res) => {
	let {nick_name, full_name, avatar} = req.body;
	let newAuthor = new Author({
		nick_name: nick_name, full_name: full_name, avatar: avatar
	});

	newAuthor.save(err => {
		if (err) HandleErrorIfAny(err, req, res);
		else res.json({
			status: 1, data: {},
			msg: "Add New Author Success ... "
		});
	});
});

router.post('/del', (req, res) => {
	let {id} = req.body;
	Author.remove({_id: id}, err => {
		if (err) HandleErrorIfAny(err, req, res);
		else res.json({
			status: 1, data: {},
			msg: "Delete Author Success ... "
		});
	});
});

router.post('/update', (req, res) => {
	let {id, nick_name, full_name, avatar} = req.body;
	Author.findById(id, (err, doc) => {
		if (err) HandleErrorIfAny(err);
		else {
			doc.nick_name = nick_name; doc.avatar = avatar;
			doc.full_name = full_name;
			doc.save(err => {
				if (err) HandleErrorIfAny(err);
				else res.json({
					status: 1, data: {},
					msg: "Update Author Success ... "
				});
			})
		}
	});
});

export default router;
