(function( $ ) {
	'use strict';

	$.fn.accordionWithLinks = function(options) {

		const defaults = {
			duration: 500,
			easing: 'swing',
			divHeading: '.card-header',  // Div which we need tracking on click
			divCollapse: '.collapse'     // Div which we need to hide or show on click
		};

		return this.each(function() {
			let settings = $.extend( {}, defaults, options ),
				$collapse = $(settings.divCollapse, this),
				$heading = $(settings.divHeading, this);

			$collapse.each(function() {
				let $this = $(this);
				let currentID = $this.attr('id');

				if(window.sessionStorage.getItem(currentID) === currentID) {
					$this.show(settings.duration, settings.easing);
				}
			});


			$heading.on('click', function() {
				let $this = $(this);
				let targetID = $(this).next().attr('id');

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
			let hash = window.location.hash.substring(1);

			// All link in heading accordion block
			let linkIndivHeading = settings.divHeading + ' a';

			// Hash found
			if(hash.length > 0) {
				$(linkIndivHeading).each(function() {
					let $this = $(this);
					let targetID = $this.closest(settings.divHeading).next().attr('id');

					if($this.attr('href') == '#'+ hash) {
						$this.closest(settings.divHeading).next().show(settings.duration, settings.easing);
						sessionStorage.setItem(targetID, targetID);
					}
				});
			}
		});

	};
}( jQuery ));
