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

router.post('/add', (req, res) => {
	let {name, avatar} = req.body;

	let newAuthor = new Page({
		name: name, avatar: avatar
	});

	newAuthor.save(err => {
		if (err) HandleErrorIfAny(err, req, res);
		else res.json({
			status: 1, data: {},
			msg: "Add New Post Success ... "
		});
	});
});

router.post('/del', (req, res) => {
	let {id} = req.body;
	Author.remove({_id: id}, err => {
		if (err) HandleErrorIfAny(err, req, res);
		else res.json({
			status: 1, data: {},
			msg: "Delete Post Success ... "
		});
	});
});

router.post('/update', (req, res) => {
	let {id, name, avatar} = req.body;
	Author.findById(id, (err, doc) => {
		if (err) HandleErrorIfAny(err);
		else {
			doc.name = name; doc.avatar = avatar;
			doc.save(err => {
				if (err) HandleErrorIfAny(err);
				else res.json({
					status: 1, data: {},
					msg: "Update Post Success ... "
				});
			})
		}
	});
});

export default router;
