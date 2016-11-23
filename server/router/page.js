import express from 'express';
let router = express.Router();

import {
	Page
} from '../util/schema';
import HandleErrorIfAny from '../util/error'

router.get('/all', (req, res) => {
	Page.find({}, (err, docs) => {
		if (err) HandleErrorIfAny(err, req, res);
		else res.json({
			status: 1, data: docs,
			msg: "query success ... " });
	});
});

router.get('/by_author', (req, res) => {
	let {id} = req.query;
	Page.find({author: id}, (err, docs) => {
		if (err) HandleErrorIfAny(err, req, res);
		else res.json({
			status: 1, data: docs,
			msg: "query success ... " });
	});
});

router.post('/add', (req, res) => {
	let {author, title, markdown} = req.body;

	let newPage = new Page({
		author: author, title: title, markdown: markdown
	});

	newPage.save(err => {
		if (err) HandleErrorIfAny(err, req, res);
		else res.json({
			status: 1, data: {},
			msg: "Add New Page Success ... "
		});
	});
});

router.post('/del', (req, res) => {
	let {id} = req.body;
	Page.remove({_id: id}, err => {
		if (err) HandleErrorIfAny(err, req, res);
		else res.json({
			status: 1, data: {},
			msg: "Delete Page Success ... "
		});
	});
});

router.post('/update', (req, res) => {
	let {id, author, title, markdown} = req.body;
	Page.findById(id, (err, doc) => {
		if (err) HandleErrorIfAny(err);
		else {
			doc.author = author; doc.title = title; doc.markdown = markdown;
			doc.save(err => {
				if (err) HandleErrorIfAny(err);
				else res.json({
					status: 1, data: {},
					msg: "Update Page Success ... "
				});
			})
		}
	});
});

export default router;
