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
            $(element).on('show', allBindings.modalOnShow);
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
            $(element).on('show', allBindings.modalOnShow);
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

/* modalOnShow - event handler for when show is initiated */
ko.bindingHandlers.modalOnShow = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        $(element).on('show', valueUnwrapped);
    }
}

/* modalOnShown - event handler for when show is completed */
ko.bindingHandlers.modalOnShown = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        $(element).on('shown', valueUnwrapped);
    }
}

/* modalOnHide - event handler for when hide is initiated */
ko.bindingHandlers.modalOnHide = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        $(element).on('hide', valueUnwrapped);
    }
}

/* modalOnHidden - event handler for when hide is completed */
ko.bindingHandlers.modalOnHidden = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        $(element).on('hidden', valueUnwrapped);
    }
}


/* Dropdown */



/* Scrollspy */



/* Tab */



/* Tooltip */



/* Popover */



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


/* Button */



/* Collapse */



/* Carousel */



/* Typeahead */



/* Affix */



/* 
* Icons 
*/

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