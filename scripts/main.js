/* Author: Brad Richardson */

// Anomymous Function for cleaner javascript
(function ($) {

    $(document).ready(function() {

        // ************************************* //
        // ----- iPhone Scrollbar Emulator ----- //
        // _____________________________________ //

        $('.iphone-vertical').overscroll({
            direction: 'vertical'
        });

    });

})(window.jQuery);