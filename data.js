var hu_day_swaps_raw = {
	'2013': {
		'work': [ '8/24', '12/7', '12/21', ],
		'holi': [ '8/19', '12/24', '12/27', ],
	},
	'2014': {
		'work': [ '5/10', '10/18', '12/13', ],
		'holi': [ '5/2', '10/24', '12/24', ],
	},
	'2015': {
		'work': [ '1/10', '8/8', '12/12', ],
		'holi': [ '1/2', '8/21', '12/24', ],
	},
	'2016': {
		'work': [ '3/5', '10/15', ],
		'holi': [ '3/14', '10/31', ],
	},
	'2017': {
		'work': [ ],
		'holi': [ ],
	},
	'2018': {
		'work': [ '3/10', '4/21', '10/13', '11/10', '12/1',  '12/15', ],
		'holi': [ '3/16', '4/30', '10/22', '11/2',  '12/24', '12/31', ],
	},
	'2019': {
		'work': [ '8/10', '12/7',  '12/14', ],
		'holi': [ '8/19', '12/24', '12/27', ],
	},
	'2020': {
		'work': [ '8/29', '12/12' ],
		'holi': [ '8/21', '12/24' ],
	},
	'2021': {
		'work': [ '12/11' ],
		'holi': [ '12/24' ],
	},
	'2022': {
		'work': [ '3/26', '10/15', ],
		'holi': [ '3/14', '10/31', ],
	},
	'2023': {
		'work': [ ],
		'holi': [ ],
	},
};
var holidays_raw = {
	'hu': {
		'2013': [ '1/1', '3/15', '4/1', '5/1', '5/20', '8/20', '10/23', '11/1', '12/25', '12/26' ],
		'2014': [ '1/1', '3/15', '4/21', '5/1', '6/9', '8/20', '10/23', '11/1', '12/25', '12/26' ],
		'2015': [ '1/1', '3/15', '4/6', '5/1', '5/25', '8/20', '10/23', '11/1', '12/25', '12/26' ],
		'2016': [ '1/1', '3/15', '3/28', '5/1', '5/16', '8/20', '10/23', '11/1', '12/25', '12/26' ],
		'2017': [ '1/1', '3/15', '4/14', '4/17', '5/1', '6/5', '8/20', '10/23', '11/1', '12/25', '12/26' ],
		'2018': [ '1/1', '3/15', '3/30', '4/2', '5/1', '5/21', '8/20', '10/23', '11/1', '12/25', '12/26' ],
		'2019': [ '1/1', '3/15', '4/19', '4/22', '5/1', '6/10', '8/20', '10/23', '11/1', '12/25', '12/26' ],
		'2020': [ '1/1', '3/15', '4/10', '4/13', '5/1', '6/1', '8/20', '10/23', '11/1', '12/25', '12/26' ],
		'2021': [ '1/1', '3/15', '4/2', '4/5', '5/1', '5/24', '8/20', '10/23', '11/1', '12/25', '12/26' ],
		'2022': [ '1/1', '3/15', '4/15', '4/18', '5/1', '6/6', '8/20', '10/23', '11/1', '12/25', '12/26' ],
		'2023': [ '1/1', '3/15', '4/7', '4/10', '5/1', '5/29', '8/20', '10/23', '11/1', '12/25', '12/26' ],
	},
	'us': {
		// http://www.nyse.com/press/1294398514465.html
		'2013': [ '1/1', '1/21', '2/18', '3/29', '5/27', '7/4', '9/2', '11/28', '12/25', ],
		// http://www.nyse.com/press/1326970333877.html
		'2014': [ '1/1', '1/20', '2/17', '4/18', '5/26', '7/4', '9/1', '11/27', '12/25', ],
		// http://www1.nyse.com/press/1387194753915.html
		'2015': [ '1/1', '1/19', '2/16', '4/3', '5/25', '7/3', '9/7', '11/26', '12/25', ],
		// https://www.nyse.com/markets/hours-calendars#holidays
		'2016': [ '1/1', '1/18', '2/15', '3/25', '5/30', '7/4', '9/5', '11/24', '12/26', ],
		'2017': [ '1/2', '1/16', '2/20', '4/14', '5/29', '7/4', '9/4', '11/23', '12/25', ],
		'2018': [ '1/1', '1/15', '2/19', '3/30', '5/28', '7/4', '9/3', '11/22', '12/25', ],
		'2019': [ '1/1', '1/21', '2/18', '4/19', '5/27', '7/4', '9/2', '11/28', '12/25', ],
		'2020': [ '1/1', '1/20', '2/17', '4/10', '5/25', '7/3', '9/7', '11/26', '12/25', ],
		'2021': [ '1/1', '1/18', '2/15', '4/2', '5/31', '7/5', '9/6', '11/25', '12/24', ],
		'2022': [ '1/17', '2/21', '4/15', '5/30', '7/4', '9/5', '11/24', '12/26', ],
		'2023': [ '1/2', '1/16', '2/20', '4/7', '5/29', '7/4', '9/4', '11/23', '12/25', ],
	},
	'ee': {
		// http://en.wikipedia.org/wiki/Public_holidays_in_Estonia
		'2013': [ '1/1', '2/24', '3/29', '5/1', '6/23', '6/24', '8/20', '12/24', '12/25', '12/26', ],
		'2014': [ '1/1', '2/24', '4/21', '5/1', '6/23', '6/24', '8/20', '12/24', '12/25', '12/26', ],
		'2015': [ '1/1', '2/24', '4/3', '4/6', '5/1', '5/25', '6/23', '6/24', '8/20', '12/24', '12/25', '12/26', ],
		'2016': [ '1/1', '2/24', '3/25', '5/1', '6/23', '6/24', '8/20', '12/24', '12/25', '12/26', ],
		'2017': [ '1/1', '2/24', '4/14', '5/1', '6/23', '6/24', '8/20', '12/24', '12/25', '12/26', ],
		'2018': [ '1/1', '2/24', '3/30', '5/1', '6/23', '6/24', '8/20', '12/24', '12/25', '12/26', ],
		'2019': [ '1/1', '2/24', '4/19', '5/1', '6/23', '6/24', '8/20', '12/24', '12/25', '12/26', ],
		'2020': [ '1/1', '2/24', '4/10', '5/1', '6/23', '6/24', '8/20', '12/24', '12/25', '12/26', ],
		'2021': [ '1/1', '2/24', '4/2', '5/1', '6/23', '6/24', '8/20', '12/24', '12/25', '12/26', ],
		'2022': [ '1/1', '2/24', '4/15', '5/1', '6/23', '6/24', '8/20', '12/24', '12/25', '12/26', ],
		'2023': [ '1/1', '2/24', '4/7', '5/1', '6/23', '6/24', '8/20', '12/24', '12/25', '12/26', ],
	},
};
var dst_changes = {
	// http://www.timeanddate.com/time/dst/2013.html
	'2013': {
		'hu': { 'start': '3/31', 'end': '10/27' },
		'us': { 'start': '3/10', 'end': '11/3' },
	},
	'2014': {
		'hu': { 'start': '3/30', 'end': '10/26' },
		'us': { 'start': '3/9', 'end': '11/2' },
	},
	'2015': {
		'hu': { 'start': '3/29', 'end': '10/25' },
		'us': { 'start': '3/8', 'end': '11/1' },
	},
	// http://www.timeanddate.com/time/dst/2016.html
	'2016': {
		'hu': { 'start': '3/27', 'end': '10/30' },
		'us': { 'start': '3/13', 'end': '11/6' },
	},
	// http://www.timeanddate.com/time/dst/2017.html
	'2017': {
		'hu': { 'start': '3/26', 'end': '10/29' },
		'us': { 'start': '3/12', 'end': '11/5' },
	},
	// http://www.timeanddate.com/time/dst/2018.html
	'2018': {
		'hu': { 'start': '3/25', 'end': '10/28' },
		'us': { 'start': '3/11', 'end': '11/4' },
	},
	// http://www.timeanddate.com/time/dst/2019.html
	'2019': {
		'hu': { 'start': '3/31', 'end': '10/27' },
		'us': { 'start': '3/10', 'end': '11/3' },
	},
	// http://www.timeanddate.com/time/dst/2020.html
	'2020': {
		'hu': { 'start': '3/29', 'end': '10/25' },
		'us': { 'start': '3/8', 'end': '11/1' },
	},
	// http://www.timeanddate.com/time/dst/2021.html
	'2021': {
		'hu': { 'start': '3/28', 'end': '10/31' },
		'us': { 'start': '3/14', 'end': '11/7' },
	},
	// http://www.timeanddate.com/time/dst/2022.html
	'2022': {
		'hu': { 'start': '3/27', 'end': '10/30' },
		'us': { 'start': '3/13', 'end': '11/6' },
	},
	// http://www.timeanddate.com/time/dst/2023.html
	'2023': {
		'hu': { 'start': '3/26', 'end': '10/29' },
		'us': { 'start': '3/12', 'end': '11/5' },
	},
};
