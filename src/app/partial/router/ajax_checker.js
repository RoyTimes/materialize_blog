const AjaxChecker = response => {
	if (response.status >= 200 && response.status < 300) {
		return response.text().then (res => {
			let obj = JSON.parse(res);
			if (obj.status != 1)
				return Promise.reject(new Error(response.status + ": " + obj.msg));
			else return obj;
		});
	} else {
		return Promise.reject(new Error(response.status + ": " + response.statusText));
	}
}
export default AjaxChecker;
