import express from 'express';
let router = express.Router();

import {
	Post
} from '../util/schema';
import HandleErrorIfAny from '../util/error'

router.get('/all', (req, res) => {
	Post.find({}, (err, docs) => {
		if (err) HandleErrorIfAny(err, req, res);
		else res.json({
			status: 1, data: docs,
			msg: "query success ... " });
	});
});

router.get('/by_category', (req, res) => {
	let {id} = req.query;
	Post.find({category: id}, (err, docs) => {
		if (err) HandleErrorIfAny(err, req, res);
		else res.json({
			status: 1, data: docs,
			msg: "query success ... " });
	})
});

router.get('/by_author', (req, res) => {
	let {id} = req.query;
	Post.find({author: id}, (err, docs) => {
		if (err) HandleErrorIfAny(err, req, res);
		else res.json({
			status: 1, data: docs,
			msg: "query success ... " });
	});
});

router.post('/add', (req, res) => {
	let {category, author, title, perfix, excerpt, markdown} = req.body;

	let newPost = new Post({
		category: category, author: author, title: title, perfix: perfix,
		excerpt: excerpt, markdown: markdown
	});

	newPost.save(err => {
		if (err) HandleErrorIfAny(err, req, res);
		else res.json({
			status: 1, data: {},
			msg: "Add New Post Success ... "
		});
	});
});

router.post('/del', (req, res) => {
	let {id} = req.body;
	Post.remove({_id: id}, err => {
		if (err) HandleErrorIfAny(err, req, res);
		else res.json({
			status: 1, data: {},
			msg: "Delete Post Success ... "
		});
	});
});

router.post('/update', (req, res) => {
	let {id, category, author, title, perfix, excerpt, markdown} = req.body;
	Post.findById(id, (err, doc) => {
		if (err) HandleErrorIfAny(err);
		else {
			doc.category = category; doc.author = author; doc.title = title;
			doc.perfix = perfix; doc.excerpt = excerpt; doc.markdown = markdown;
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
