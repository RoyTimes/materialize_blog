import express from 'express';
let router = express.Router();

import {
	Category
} from '../util/schema';
import HandleErrorIfAny from '../util/error'

router.get('/all', (req, res) => {
	Category.find({}, (err, docs) => {
		if (err) HandleErrorIfAny(err, req, res);
		else res.json({
			status: 1, data: docs,
			msg: "query success ... " });
	});
});

router.post('/add', (req, res) => {
	let {title, index, password, logo} = req.body;
	let newCategory = new Page({
		title: title, index: index,
		password: password, logo: logo, url: url
	});

	newCategory.save(err => {
		if (err) HandleErrorIfAny(err, req, res);
		else res.json({
			status: 1, data: {},
			msg: "Add New Post Success ... "
		});
	});
});

router.post('/del', (req, res) => {
	let {id} = req.body;
	Category.remove({_id: id}, err => {
		if (err) HandleErrorIfAny(err, req, res);
		else res.json({
			status: 1, data: {},
			msg: "Delete Post Success ... "
		});
	});
});

router.post('/update', (req, res) => {
	let { id, title, index, password, logo} = req.body;
	Category.findById(id, (err, doc) => {
		if (err) HandleErrorIfAny(err);
		else {
			doc.title = title; doc.index = index;
			doc.password = password;
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
