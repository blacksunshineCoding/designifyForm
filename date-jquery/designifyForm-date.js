$.fn.dfDate = function(options){

	var input = $(this).find('input');
	// input.wrap('<div class="df-wrap"></div>')
	$('<div class="df-pick"></div>').insertAfter(input);
	var wrap = $(this);
	var datepick = $(this).find('.df-pick'); 

	// console.log(datepick);

	options = $.extend({
			style: 'edged',
			size: 'default',
			startYear: 1980,
			endYear: 2030
	}, options);


	calendar = {
		daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
		currentDate: new Date(),
		yearOptions: [],
		monthOptions:  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		dayOptions: [],
		current:  {
			date: new Date(),
			daysInMonth: '',
			dayOptions: ''
		},
		html: {
			year: '',
			month: '',
			day: ''
		},
		init: function() {
			calendar.actions.getYearOptions();
			calendar.actions.getDayOptions();
			calendar.actions.getYearHtml();
			calendar.actions.getMonthHtml();
			calendar.actions.getDayHtml();
			datepick
				.append(calendar.html.day)
				.append(calendar.html.month)
				.append(calendar.html.year);
			calendar.actions.updateDays();
		},
		actions: {
			getYearOptions: function() {
				var countYear = options.startYear;
				while (countYear < options.endYear) {
					calendar.yearOptions.push(countYear);
					countYear++;
				}
			},
			getDayOptions: function() {
				var countDay = 1;
				while (countDay <= 31) {
					calendar.dayOptions.push(countDay);
					countDay++;
				}
				calendar.html.day = calendar.dayOptions;
			},
			getYearHtml: function() {
				yearOptionsHtml = '<select class="year">';
				calendar.yearOptions.forEach(function(entry) {
					yearOptionsHtml += '<option value="' + entry + '">' + entry + '</option>';	
				})
				yearOptionsHtml += '</select>';

				calendar.html.year = yearOptionsHtml;
			},
			getMonthHtml: function() {
				monthOptionsHtml = '<select class="month">';
				var monthCount = 1;
				calendar.monthOptions.forEach(function(entry) {
					monthOptionsHtml += '<option value="' + monthCount + '">' + entry + '</option>';	
					monthCount++;
				})
				monthOptionsHtml += '</select>';

				calendar.html.month = monthOptionsHtml;

			},
			getDayHtml: function() {
				dayOptionsHtml = '<select class="day">';
				calendar.dayOptions.forEach(function(entry) {
					dayOptionsHtml += '<option value="' + entry + '">' + entry + '</option>';	
				})
				dayOptionsHtml += '</select>';

				calendar.html.day = dayOptionsHtml;
			},
			updateDays: function() {
				var monthSelect = datepick.find('.month');
				
				console.log(wrap);
				console.log(datepick);
				console.log(monthSelect);
				// console.log('monthselect:');
				// console.log(monthSelect);
				// return;

				// console.log(monthSelect.val());

				calendar.current.daysInMonth = calendar.daysInMonth[ monthSelect.val() ];

				// console.log(calendar.current.daysInMonth);

				// console.log(calendar.current.daysInMonth);
				calendar.current.dayOptions = [];

				var countDay = 1;
				while (countDay <= calendar.current.daysInMonth) {
					calendar.current.dayOptions.push(countDay);
					countDay++;
				}
				calendar.current.dayOptionsHtml = '';
				calendar.current.dayOptions.forEach(function(entry) {
					calendar.current.dayOptionsHtml += '<option value="' + entry + '">' + entry + '</option>';	
				});

				calendar.current.beforeDay = datepick.find('.day').val();

				datepick.find('.day option').remove();
				datepick.find('.day').html(calendar.current.dayOptionsHtml);

				// console.log(calendar.current.beforeDay);
				datepick.find('.day').val(calendar.current.beforeDay);
			}
		}
	}

	calendar.init();

	datepick.find('.month').change(function() {
		calendar.actions.updateDays();
	});

}