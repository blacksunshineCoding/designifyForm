$.fn.dfCheckbox = function(options){

	options = $.extend({
			colour: false
	}, options);

	var outerWrap = 'df-wrap';

	switch (options.type) {
		default:
		case 'plain':
			var input = $(this);
			outerWrap += ' checkbox-plain';
			break;

		case 'labeled':
			var wrap = $(this);
			var input = $(this).find('input');
			var label = $(this).find('label');
			outerWrap += ' checkbox-labeled';
			break;
	}

	switch (options.style) {
		default:
		case 'edged':
			outerWrap += ' style-edged';
			break;

		case 'rounded':
			outerWrap += ' style-rounded';
			break;

		case 'circle':
			outerWrap += ' style-circle';
			break;
	}

	switch (options.size) {
		case 'small':
			outerWrap += ' size-small';
			break;

		default:
		case 'default':
			outerWrap += ' size-default';
			break;

		case 'large':
			outerWrap += ' size-large';
			break;

		case 'xlarge':
			outerWrap += ' size-xlarge';
			break;
	}

	if (options.colour != false) {
		switch (options.colour) {
			case 'green':
				outerWrap += ' coloured coloured-green';
				break;

			case 'blue':
				outerWrap += ' coloured coloured-blue';
				break;

			case 'yellow':
				outerWrap += ' coloured coloured-yellow';
				break;
		}
	}

	switch (options.type) {
		default:
		case 'plain':
			input.addClass('df-checkbox');
			input.wrap('<span class="' + outerWrap + '"></span>');
			$('<span class="df-extension"></span>').insertAfter(input);

			break;

		case 'labeled':
			console.log(1);
			wrap.addClass(outerWrap);
			input.addClass('df-checkbox');
			input.wrap('<span class="checkbox-wrap"></span>');
			label.wrap('<span class="label-wrap"></span>');
			$('<span class="df-extension"></span>').insertAfter(input);
			break;
	}
}
