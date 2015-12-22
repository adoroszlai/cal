function norm_day(day) {
	if (day == 0) {
		return 7;
	} else {
		return day;
	}
}

function max_length(arr) {
	var max_length = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].length > max_length) {
			max_length = arr[i].length;
		}
	}
	return max_length;
}

function to_map(arr) {
	var map = {};
	if (arr) {
		for (var i = 0; i < arr.length; i++) {
			map[arr[i]] = '';
		}
	}
	return map;
}
