/*!
* Bootout.js by Anthony P. Alicea
* http://www.anthonypalicea.com
*
* A collection of Knockout bindings for Bootstrap's 13 jQuery plugins
* Dependent on jQuery, Twitter Bootstrap, and Knockout JS
*
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/


/* 
* Modal Bindings
*/

/* modalSetup - Adds classes and attributes for a modal element. */
/* note this is only an initializer, does not track updates */
ko.bindingHandlers.modalSetup = {

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
        }
    }
}

/* modalFade - should modal fade in and out */
ko.bindingHandlers.modalFade = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (valueUnwrapped === true) {
            $(element).addClass("fade");
        }
        else {
            $(element).removeClass("fade");
        }
    },

    update: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (valueUnwrapped === true) {
            $(element).addClass("fade");
        }
        else {
            $(element).removeClass("fade");
        }
    }
}

/* modalDisable - should modal be allowed to be activated */
ko.bindingHandlers.modalDisable = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (valueUnwrapped === true) {
            $(element).on('show', function (e) {
                return e.preventDefault();
            });
        }
        else {
            $(element).off('show');
        }
    },

    update: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (valueUnwrapped === true) {
            $(element).on('show', function (e) {
                return e.preventDefault();
            });
        }
        else {
            $(element).off('show');
        }
    }
}

/* modalShow - show or hide the modal */
ko.bindingHandlers.modalShow = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (valueUnwrapped === true) {
            $(element).modal("show");
        }
        else {
            $(element).modal("hide");
        }
    },

    update: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (valueUnwrapped === true) {
            $(element).modal("show");
        }
        else {
            $(element).modal("hide");
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



/* Icons */

/* bootstrapIcon - adds 'icon-' class for the string value assigned */
/* note both a value of "" and null will remove ALL icon- classes from the element */
ko.bindingHandlers.bootstrapIcon = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (valueUnwrapped != "" && valueUnwrapped) {
            $(element).addClass("icon-" + valueUnwrapped);
        }
    },

    update: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        // remove all existing icon- classes
        $(element).removeClass(function (index, css) {
            return (css.match(/\bicon-\S+/g) || []).join(' ');
        });

        // add the bound icon class
        if (valueUnwrapped != "" && valueUnwrapped) {
            $(element).addClass("icon-" + valueUnwrapped);
        }
    }
}