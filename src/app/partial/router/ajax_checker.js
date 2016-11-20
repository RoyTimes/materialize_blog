const AjaxChecker = (data) => {
	if (data.status != 1) {
		consle.error (data.msg);
	}
}

export default AjaxChecker;
