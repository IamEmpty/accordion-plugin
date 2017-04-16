(function accordionPlugin($) {
  $.fn.accordionWithLinks = function coreFn(options) {
    const defaults = {
      duration: 500,
      easing: 'swing',
      divHeading: '.card-header',  // Div which we need tracking on click
      divCollapse: '.show',        // Div which we need to hide or show on click
      show: '.show',
    };

    return this.each(function eachAccordion() {
      const settings = $.extend({}, defaults, options);
      const $collapse = $(settings.divCollapse, this);
      const $heading = $(settings.divHeading, this);

      $collapse.each(function getFromStorage() {
        const $this = $(this);
        const currentID = $this.attr('id');

        if (window.sessionStorage.getItem(currentID) === currentID) {
          $this.show(settings.duration, settings.easing);
        }
      });


      $heading.on('click', function clickAction(e) {
        e.preventDefault();

        const $this = $(this);
        const targetID = $(this).next().attr('id');

        if (!$this.next().is(':visible')) {
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
      const hash = window.location.hash.substring(1);

      // All link in heading accordion block
      const linkIndivHeading = `${settings.divHeading} + a`;

      // Hash found
      if (hash.length > 0) {
        $(linkIndivHeading).each(function eachHash() {
          const $this = $(this);
          const targetID = $this.closest(settings.divHeading).next().attr('id');

          if ($this.attr('href') === `# + ${hash}`) {
            $this.closest(settings.divHeading).next().show(settings.duration, settings.easing);
            sessionStorage.setItem(targetID, targetID);
          }
        });
      }
    });
  };
}(jQuery));
