/*!
* Bootout.js by Anthony P. Alicea
* http://www.anthonypalicea.com
*
* A collection of Knockout bindings for Bootstrap's 13 jQuery plugins
* Dependent on jQuery, Twitter Bootstrap, and Knockout JS
*
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/


/* Modals */
ko.bindingHandlers.isModal = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (valueUnwrapped === true) {

            var options = allBindings.modalOptions || {};

            // modal attributes
            $(element).attr("tabindex", "-1").attr("role", "dialog").attr("aria-hidden", true);
            if (allBindings.modalAriaLabelId) {
                $(element).attr("aria-labelledby", allBindings.modalAriaLabelId);
            }

            // modal css classes
            $(element).addClass("modal").addClass("hide").modal(options);
            if (allBindings.modalFade === true) {
                $(element).addClass("fade");
            }
        }
    },

    update: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (valueUnwrapped === false) {
            $(element).on('show', function (e) {
                return e.preventDefault(); // stops modal from being shown
            })
        }
        else {
            $(element).off('show'); // let modal be shown
        }
    }
}


/* Dropdown */



/* Scrollspy */



/* Tab */



/* Tooltip */



/* Popover */



/* Alert */



/* Button */



/* Collapse */



/* Carousel */



/* Typeahead */



/* Affix */
