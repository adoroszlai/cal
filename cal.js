var year = 2015;

var month_names = [ 'január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december', ];
var day_names = [ 'Hé', 'Ke', 'Sz', 'Cs', 'Pé', 'Sz', 'Va', ];

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
	for (var i = 0; i < arr.length; i++) {
		map[arr[i]] = '';
	}
	return map;
}

function get_dst_arrow(day_id, year, country) {
	if (day_id === dst_changes[year][country]['start']) {
		return '&rarr;';
	} else if (day_id === dst_changes[year][country]['end']) {
		return '&larr;';
	} else {
		return null;
	}
}

$(document).ready(function() {
	var header_len = 0;

	var holidays = {};
	for (var key in holidays_raw) {
		holidays[key] = to_map(holidays_raw[key][year]);
	}
	var hu_day_swaps = {};
	hu_day_swaps['work'] = to_map(hu_day_swaps_raw[year]['work']);
	hu_day_swaps['holi'] = to_map(hu_day_swaps_raw[year]['holi']);

	var calendar = [];
	var week_of_year = 1;

	for (var month = 0; month < 12; month++) {
		var arr = [];
		arr.push({ 'text': month_names[month] });

		var friday_count = 0;

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
					'week': (week_of_year % 2 == 1 ? 'odd' : 'even'),
					'option_friday': (friday_count == 2 && day_of_week == 5),
				});
				if (day_of_week == 7) {
					week_of_year++;
				} else if (day_of_week == 5) {
					friday_count++;
				}
			}
		}
		calendar[month] = arr;
	}

	var header_len = max_length(calendar);
	var header_row = document.createElement('tr');
	for (var i = 0; i <= header_len; i++) {
		var item = document.createElement('th');
		$(item).addClass('header');
		if (i > 0 && i < header_len) {
			var day_name = day_names[(i - 1) % 7];
			$(item).append(day_name);
		}
		$(item).addClass('cell');
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

	var year_workdays = 0;

	for (var month = 0; month < 12; month++) {
		var month_data = calendar[month];
		var month_row = document.createElement('tr');

		var month_name = document.createElement('td');
		$(month_name).addClass('cell');
		$(month_name).addClass('month_name');
		$(month_name).append(month_data[0]['text']);
		$(month_row).append(month_name);

		var workdays = 0;

		for (var i = 1; i < month_data.length; i++) {
			var day_data = month_data[i];
			var day_id = day_data['id'];
			var item = document.createElement('td');
			$(item).addClass('cell');
			var text = day_data['text'];
			if (text !== '') {
				var text_container = document.createElement('div');
				var arrow = get_dst_arrow(day_id, year, 'us');
				$(text_container).append(arrow);
				if (arrow !== null) {
					$(item).addClass('dst_change_us');
				}
				$(text_container).append(text);
				$(item).append(text_container);
				$(item).addClass('day');
				$(item).addClass(day_data['weekend'] ? 'weekend' : 'weekday');
				$(item).addClass(day_data['week'] + '_week');
				if (hu_day_swaps['work'][day_id] !== undefined) {
					$(item).addClass('hu_swap_work');
					workdays++;
				} else if (hu_day_swaps['holi'][day_id] !== undefined) {
					$(item).addClass('hu_swap_holi');
				} else if (!day_data['weekend'] && holidays['hu'][day_id] === undefined) {
					workdays++;
				}
				if (day_data['option_friday']) {
					$(text_container).addClass('option_friday');
				}
				for (var key in holidays_raw) {
					if (holidays[key][day_id] !== undefined) {
						$(text_container).addClass(key + 'holiday_text');
						$(item).addClass(key + 'holiday_cell');
					}
				}
				arrow = get_dst_arrow(day_id, year, 'hu');
				$(text_container).append(arrow);
				if (arrow !== null) {
					$(item).addClass('dst_change_hu');
				}
			}
			$(month_row).append(item);
		}
		var workdays_item = document.createElement('td');
		$(workdays_item).append(workdays);
		$(workdays_item).addClass('cell');
		$(workdays_item).addClass('workday_count');
		$(month_row).append(workdays_item);
		year_workdays += workdays;
		$('#calendar').append(month_row);
	}

	var footer_row = document.createElement('tr');
	var gap = document.createElement('td');
	$(gap).attr('colspan', header_len);
	$(gap).addClass('cell');
	$(footer_row).append(gap);
	var total = document.createElement('td');
	$(total).append(year_workdays);
	$(total).addClass('cell');
	$(total).addClass('workday_count');
	$(footer_row).append(total);
	$('#calendar').append(footer_row);
});
