$.fn.dfRadio = function(options){

	options = $.extend({
			labelStyle: 'block',
			colourStyle: 'half'
	}, options);

	var wrapWrap = 'df-radio';
	var outerWrap = 'df-wrap';

	switch (options.type) {
		default:
		case 'plain':
			var inputs = $(this).find('input[type="radio"]');
			var wrap = $(this);
			var parent = $(this).parent();
			wrapWrap += ' radio-normal';
			outerWrap += ' radio-plain';
			break;

		case 'labeled':

			var inputs = $(this).find('input[type="radio"]');
			var labels = $(this).find('label');
			var wrap = $(this);
			var parent = $(this).parent();
			wrapWrap += ' radio-labeled';
			outerWrap += ' radio-labeled';

			switch (options.labelStyle) {
				default:
					case 'block':
					wrapWrap += ' block-label';
					break;

				case 'inline':
					wrapWrap += ' inline-label';
					break;
			}
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
			default:
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

		switch(options.colourStyle) {
			default:
			case 'half':
				outerWrap += ' coloured-half';
				break;

			case 'full':
				outerWrap += ' coloured-full';
				break;
		}
	} else {
		outerWrap += ' nocolour';
	}

	switch (options.type) {
		default:
		case 'plain':
			wrap.wrap('<div class="' + wrapWrap + '"></div>')
			wrap.addClass(outerWrap);
			inputs.addClass('df-radio')
			inputs.wrap('<span class="radio-wrap"></span>');
			$('<span class="df-extension"><span class="ext-inner"></span></span>').insertAfter(inputs);
			break;

		case 'labeled':
			wrap.wrap('<div class="' + wrapWrap + '"></div>')
			wrap.addClass(outerWrap);
			inputs.addClass('df-radio');
			$('<span class="df-extension"><span class="ext-inner"></span></span>').insertAfter(inputs);
			labels.wrap('<span class="label-wrap"></span>');
			break;
	}
}
