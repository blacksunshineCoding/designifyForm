$.fn.dfButton = function(options){

	options = $.extend({
			style: 'edged',
			size: 'default',
			colour: false,
			hoverStyle: 'full'
	}, options);

	var classes = 'df-button';
	var button = $(this);

	switch (options.style) {
		default:
		case 'edged':
			classes += ' style-edged';
			break;

		case 'rounded':
			classes += ' style-rounded';
			break;
	}

	switch (options.size) {
		case 'small':
			classes += ' size-small';
			break;

		default:
		case 'default':
			classes += ' size-default';
			break;

		case 'large':
			classes += ' size-large';
			break;

		case 'xlarge':
			classes += ' size-xlarge';
			break;
	}

	switch(options.hoverStyle) {
		
		default:
		case 'full':
			classes += ' hover-full';
			break;

		case 'light':
			classes += ' hover-light';
			break;
	}

	if (options.colour != false) {
		switch (options.colour) {
			default:
			case 'green':
				classes += ' coloured coloured-green';
				break;

			case 'blue':
				classes += ' coloured coloured-blue';
				break;

			case 'yellow':
				classes += ' coloured coloured-yellow';
				break;
		}

	} else {
		classes += ' nocolour';
	}

	button.addClass(classes);

}