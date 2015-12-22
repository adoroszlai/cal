$(document).ready(function() {
	var holidays = to_map(holidays_raw[country][year]);
	var day_swaps = {'work':{}, 'holi': {}};
	if (day_swaps_raw[country] !== undefined) {
		day_swaps['work'] = to_map(day_swaps_raw[country][year]['work']);
		day_swaps['holi'] = to_map(day_swaps_raw[country][year]['holi']);
	}

	var calendar = [];
	for (var month = 0; month < 12; month++) {
		var arr = [];
		arr.push({ 'text': month_names[language][month] });

		var month_start = new Date(year, month, 1);
		for (var i = 1; i < norm_day(month_start.getDay()); i++) {
			arr.push({ 'text': '' });
		}

		for (var day = 1; day <= 31; day++) {
			var date = new Date(year, month, day);
			if (date.getMonth() == month) {
				var day_id = (month+1) + '/' + day;
				var day_of_week = norm_day(date.getDay());
				arr.push({
					'text': day,
					'id': day_id,
					'weekend': (day_of_week == 6 || day_of_week == 7),
				});
			}
		}
		calendar[month] = arr;
	}

	var header_len = max_length(calendar);
	var header_row = document.createElement('tr');
	for (var i = 0; i < header_len; i++) {
		var item = document.createElement('th');
		$(item).addClass('header');
		if (i > 0 && i < header_len) {
			var day_name = day_names[language][(i - 1) % 7];
			$(item).append(day_name);
		}
		$(header_row).append(item);
	}
	$('#calendar').append(header_row);

	for (var month = 0; month < 12; month++) {
		var month_data = calendar[month];
		var diff = header_len - month_data.length;
		for (var i = 0; i < diff; i++) {
			month_data.push({ 'text': '' });
		}
	}

	for (var month = 0; month < 12; month++) {
		var month_data = calendar[month];
		var month_row = document.createElement('tr');

		var month_name = document.createElement('td');
		$(month_name).addClass('month_name');
		$(month_name).append(month_data[0]['text']);
		$(month_row).append(month_name);

		for (var i = 1; i < month_data.length; i++) {
			var day_data = month_data[i];
			var day_id = day_data['id'];
			var item = document.createElement('td');
			$(item).addClass('cell');
			var text = day_data['text'];
			if (text !== '') {
				var text_container = document.createElement('div');
				$(text_container).append(text);
				$(item).append(text_container);
				$(item).addClass('day');
				$(item).addClass(day_data['weekend'] ? 'weekend' : 'weekday');
				if (day_swaps['work'][day_id] !== undefined) {
					$(item).addClass('swap_work');
				} else if (day_swaps['holi'][day_id] !== undefined) {
					$(item).addClass('swap_holi');
				}
				if (holidays[day_id] !== undefined) {
					$(item).addClass('holiday_cell');
				}
			}
			$(month_row).append(item);
		}
		$('#calendar').append(month_row);
	}
});
