function countChar(val) {
	var len = val.value.length;
	if (len >= 500) {
		val.value = val.value.substring(0, 200);
	} else {
		$('#charNum').text("Characters left: " + (200 - len));
	}
};
