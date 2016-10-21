function handleError(err, req, res) {
	if (err) {
		console.error(req.url);
		console.error(req.body);
		console.error(req.query);
		console.error(err);
		res.json({
			status: 0, msg: "Database Error ... ",
			data: err
		});
	}
}
export default handleError;
