/*!
* Bootout.js by Anthony P. Alicea
* http://www.anthonypalicea.com/projects/bootout
*
* A collection of Knockout bindings for Bootstrap Icons, Bootstrap Progress Bars, and Bootstrap's 13 jQuery plugins
* Dependent on jQuery, Twitter Bootstrap, and Knockout JS
*
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/


/* 
* Alert Bindings
* NOTE: We do not here use the $().alert('close') method for closing the alert as it removes the element from the DOM. Instead we manually show and hide via jQuery.
*/

/* alertSetup - Adds classes and attributes for an alert. */
/* note this is only an initializer, does not track updates */
ko.bindingHandlers.alertSetup = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (valueUnwrapped === true) {

            // alert css classes
            $(element).addClass("alert").alert();

        }
    }
}

/* alertIsBlock - should alert be a block alert */
ko.bindingHandlers.alertIsBlock = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (valueUnwrapped === true) {
            $(element).addClass("alert-block");
        }
        else {
            $(element).removeClass("alert-block");
        }
    },

    update: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (valueUnwrapped === true) {
            $(element).addClass("alert-block");
        }
        else {
            $(element).removeClass("alert-block");
        }
    }
}

/* alertType - adds 'alert-' class for the string value assigned
* note both a value of "" and null will remove ALL alert- classes from the element
* with the exception of the 'alert-block' class */
var validAlertTypes = ["error", "success", "info"];

ko.bindingHandlers.alertType = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if ($.inArray(valueUnwrapped, validAlertTypes) > -1) {
            if (valueUnwrapped != "" && valueUnwrapped) {
                $(element).addClass("alert-" + valueUnwrapped);
            }
        }
    },

    update: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);
        var alertIsBlock = ko.utils.unwrapObservable(allBindings.alertIsBlock);

        // remove all existing alert- classes
        $(element).removeClass(function (index, css) {
            return (css.match(/\balert-\S+/g) || []).join(' ');
        });

        if (alertIsBlock) { $(element).addClass("alert-block"); }

        // add the bound alert type
        if ($.inArray(valueUnwrapped, validAlertTypes) > -1) {
            if (valueUnwrapped != "" && valueUnwrapped) {
                $(element).addClass("alert-" + valueUnwrapped);
            }
        }
    }
}

/* alertShow - show or hide the alert
*  note: the 'close' and 'closed' event are mimicked when alertShow is set to false
*  the 'close' and 'closed' events will not fire if the element is already hidden 
*  also we add additional 'show' and 'shown' events for when the alert is shown again */
ko.bindingHandlers.alertShow = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);
        var alertFadeUnwrapped = ko.utils.unwrapObservable(allBindings.alertFade);

        if (valueUnwrapped === true) {
            if (alertFadeUnwrapped === true) {
                $(element).fadeIn('fast');
            }
            else {
                $(element).show();
            }
        }
        else {
            if (alertFadeUnwrapped === true) {
                $(element).fadeOut('fast');
            }
            else {
                $(element).hide();
            }
        }
    },

    update: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);
        var alertFadeUnwrapped = ko.utils.unwrapObservable(allBindings.alertFade);

        if (valueUnwrapped === true) {

            var isAlreadyShown = $(element).is(":visible");
            if (!isAlreadyShown) {
                $(element).trigger('show');
            }

            if (alertFadeUnwrapped === true) {
                $(element).fadeIn('fast',
                    function () {
                        if (!isAlreadyShown) {
                            $(element).trigger('shown');
                        }
                    });
            }
            else {
                $(element).show(0,
                    function () {
                        if (!isAlreadyShown) {
                            $(element).trigger('shown');
                        }
                    });
            }
        }
        else {

            var isAlreadyHidden = $(element).is(":hidden");
            if (!isAlreadyHidden) {
                $(element).trigger('close');
            }

            if (alertFadeUnwrapped === true) {
                $(element).fadeOut('fast',
                    function () {
                        if (!isAlreadyHidden) {
                            $(element).trigger('closed');
                        }
                    });
            }
            else {
                $(element).hide(0,
                    function () {
                        if (!isAlreadyHidden) {
                            $(element).trigger('closed');
                        }
                    });
            }
        }
    }
}

/* alertOnShow - event handler for when show is initiated */
ko.bindingHandlers.alertOnShow = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        $(element).on('show', valueUnwrapped);
    }
}

/* alertOnShown - event handler for when show is completed */
ko.bindingHandlers.alertOnShown = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        $(element).on('shown', valueUnwrapped);
    }
}

/* alertOnClose - event handler for when close is initiated */
ko.bindingHandlers.alertOnClose = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        $(element).on('close', valueUnwrapped);
    }
}

/* alertOnClosed - event handler for when close is completed */
ko.bindingHandlers.alertOnClosed = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        $(element).on('closed', valueUnwrapped);
    }
}