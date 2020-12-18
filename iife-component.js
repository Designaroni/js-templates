/**
 * IIFE JavaScript Component
 * @description - A basic Modular JavaScript Component Template, contains IIFE, jQuery Shorthand, Conditional & Variable annotation examples, inline commenting examples
 * @todo - document this
 * @todo - convert jQ to ES5 and ES6
 * @requires {jQuery}
 * @requires {$.fn.exists}
 * @see {NamespaceUI.js}
 * @example - 
 */


/**
 * IIFE - start with semi-colon ; to close & protect against unclosed bundled JS, pass in global vars as needed - jQuery, underscore, prototype, window etc..
 */
;(function($) {
    
  /**
   * JQuery shorthand on Document Ready
   */
  $(function() {

    /**
     * Conditional, operate only when 'elementClass' present
     * Check for CSS class 'elementClass', applied to XYZ CMS element
     */
    if ( $(`.elementClass`).exists() ) {

      /**
       * Create variable for operating on 'elementClass' CSS class
       * @var {Object} elementClass - expected to be jQuery object
       */
      var elementClass = $(`.elementClass`);
      
    } else {
      // do nothing
    } // end contitional

  }) // end document ready

})(jQuery); // end IIFE
