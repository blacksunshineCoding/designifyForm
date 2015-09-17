$.fn.dfNumber = function(options){

	options = $.extend({
		type: 'plain',
		size: 'default',
		style: 'edged',
		colour: false,
		icon: 'edged',
		labelAlign: 'left'
	}, options);

	var input = $(this);
	var outerWrap = 'df-number';

	switch (options.type) {
		default:
		case 'plain':
			outerWrap += ' number-plain';
			break;

		case 'labeled':
			var wrap = $(this);
			var input = $(this).find('input');
			var label = $(this).find('label');
			outerWrap += ' labeled';

			switch (options.labelAlign) {
				default:
				case 'left':
					outerWrap += ' labeled-left';
					break;

				case 'right':
					outerWrap += ' labeled-right';
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

	switch (options.icon) {
		default:
		case 'edged':
			outerWrap += ' icon-edged';
			break;

		case 'rounded':
			outerWrap += ' icon-rounded';
			break;

		case 'border':
			outerWrap += ' icon-border';
			break;
	}

	switch (options.type) {
		default:
		case 'plain':
			input.wrap('<span class="' + outerWrap + '"></span>');
			$('<span class="df-extension"><span class="df-control"><span class="up"></span><span class="down"></span></span></span>').insertAfter(input);

			break;

		case 'labeled':
			wrap.addClass(outerWrap);
			input.addClass('df-checkbox');
			input.wrap('<span class="input-wrap"></span>');
			label.wrap('<span class="label-wrap"></span>');
			$('<span class="df-extension"><span class="df-control"><span class="up"></span><span class="down"></span></span></span>').insertAfter(input);
			break;
	}
}
