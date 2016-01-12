(function( $ ) {
	'use strict';

	$.fn.accordionWithLinks = function(options) {

		var defaults = {
			duration: 500,
			easing: 'swing',
			divHeading: '.panel-heading',     // Div which we need tracking on click
			divCollapse: '.collapse'          // Div which we need to hide or show on click
		};

		return this.each(function() {
			var settings   = $.extend( {}, defaults, options ),
				$collapse = $(settings.divCollapse, this),
				$heading  = $(settings.divHeading, this);

			// Uncomment in case of using any another classes instead of 'collapse'
			//$(settings.divCollapse).hide();

			$collapse.each(function() {
				$this = $(this);
				var currentID = $this.attr('id');

				if(window.sessionStorage.getItem(currentID) == currentID) {
					$this.show(settings.duration, settings.easing);
				}
			});


			$heading.on('click', function() {
				$this = $(this);
				var targetID = $(this).next().attr('id');

				if(!$this.next().is(':visible')) {
					$this.next().show(settings.duration, settings.easing);
					sessionStorage.setItem(targetID, targetID);
				} else {
					$this.next().hide(settings.duration, settings.easing);
					sessionStorage.removeItem(targetID, targetID);
				}
				$heading.next().not($this.next()).hide(settings.duration, settings.easing);
				sessionStorage.setItem(targetID, targetID);
			});


			//
			// Work with hash
			//

			// Puts hash in variable, and removes the # character
			var hash = window.location.hash.substring(1);

			// All link in heading accordion block
			var linkIndivHeading = settings.divHeading + ' ' + 'a' + '[href^=#]';

			// Hash found
			if(hash.length > 0) {
				$(linkIndivHeading).each(function() {
					$this = $(this);
					var targetID = $this.closest(settings.divHeading).next().attr('id');

					if($this.attr('href') == '#'+ hash) {
						$this.closest(settings.divHeading).next().show(settings.duration, settings.easing);
						sessionStorage.setItem(targetID, targetID);
					}
				});
			}
		});

	};
}( jQuery ));
