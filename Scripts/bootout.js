/*!
* Bootout.js by Anthony P. Alicea
* http://www.anthonypalicea.com
*
* A collection of Knockout bindings for Bootstrap Icons, Bootstrap Progress Bars, and Bootstrap's 13 jQuery plugins
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


/* 
* Button 
*/



/* 
* Collapse 
*/

/* collapseSetup - Adds classes for a collapsible area. */
/* note this is only an initializer, does not track updates */
ko.bindingHandlers.collapseSetup = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        var options = allBindings.collapseOptions || {};

        if (valueUnwrapped === true) {
            $(element).collapse(options);
        }
    }

}

/* collapseIsOpen - Opens and closes the collapsible area. */
ko.bindingHandlers.collapseIsOpen = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (valueUnwrapped === true) {
            $(element).collapse('show');
        }
        else {
            $(element).collapse("hide");
        }
    },

    update: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (valueUnwrapped === true) {
            $(element).collapse('show');
        }
        else {
            $(element).collapse("hide");
        }
    }
}


/* collapseAction - runs the action against the target specified in the
* 'collapseTarget' binding. The 'collapseTarget' binding should be the id
* of the element containing the collapsible area. Likely whatever you
* bound 'collapseSetup' to. */
var validCollapseActionTypes = ["show", "hide", "toggle"];

ko.bindingHandlers.collapseAction = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        var target = ko.utils.unwrapObservable(allBindings.collapseTarget);

        if ($.inArray(valueUnwrapped, validCollapseActionTypes) > -1) {

            $(element).unbind('click');
            var targetDivIdSelector = '#' + target;

            if (target !== "" && target) {

                $(element).click(function (event) {

                    event.preventDefault();

                    switch (valueUnwrapped)
                    {
                        case "show":
                            $(targetDivIdSelector).collapse('show');
                            break;
                        case "hide":
                            $(targetDivIdSelector).collapse('hide');
                            break;
                        case "toggle":
                            $(targetDivIdSelector).collapse('toggle');
                            break;
                        default:
                            break;
                    }
                });
            }
        }
    },

    update: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        var target = ko.utils.unwrapObservable(allBindings.collapseTarget);

        if ($.inArray(valueUnwrapped, validCollapseActionTypes) > -1) {

            $(element).unbind('click');
            var targetDivIdSelector = '#' + target;

            if (target !== "" && target) {

                $(element).click(function (event) {

                    event.preventDefault();

                    switch (valueUnwrapped)
                    {
                        case "show":
                            $(targetDivIdSelector).collapse('show');
                            break;
                        case "hide":
                            $(targetDivIdSelector).collapse('hide');
                            break;
                        case "toggle":
                            $(targetDivIdSelector).collapse('toggle');
                            break;
                        default:
                            break;
                    }
                });
            }
        }
    }
}

/* collapseOnShow - event handler for when show is initiated */
ko.bindingHandlers.collapseOnShow = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        $(element).on('show', valueUnwrapped);
    }
}

/* collapseOnShown - event handler for when show is completed */
ko.bindingHandlers.collapseOnShown = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        $(element).on('shown', valueUnwrapped);
    }
}

/* collapseOnHide - event handler for when hide is initiated */
ko.bindingHandlers.collapseOnHide = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        $(element).on('hide', valueUnwrapped);
    }
}

/* collapseOnHidden - event handler for when hide is completed */
ko.bindingHandlers.collapseOnHidden = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        $(element).on('hidden', valueUnwrapped);
    }
}




/* Carousel */



/* Typeahead */



/* Affix */




/* 
* Progress Bars 
*/

/* progressBarIsContainer - setup needed classes for an progress bar containing div */
ko.bindingHandlers.progressBarIsContainer = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (valueUnwrapped === true) {
            $(element).addClass("progress");
        }
        else {
            $(element).removeClass("progress");
        }
    },

    update: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (valueUnwrapped === true) {
            $(element).addClass("progress");
        }
        else {
            $(element).removeClass("progress");
        }
    }

}

/* progressBarContainerIsStriped - setup needed classes for striped progress bars
* note this bindings applies to the container, not the individual bar */
ko.bindingHandlers.progressBarContainerIsStriped = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (valueUnwrapped === true) {
            $(element).addClass("progress-striped");
        }
        else {
            $(element).removeClass("progress-striped");
        }
    },

    update: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (valueUnwrapped === true) {
            $(element).addClass("progress-striped");
        }
        else {
            $(element).removeClass("progress-striped");
        }
    }

}

/* progressBarContainerIsAnimated - setup needed classes for animated progress bars
* note this bindings applies to the container, not the individual bar */
ko.bindingHandlers.progressBarContainerIsAnimated = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (valueUnwrapped === true) {
            $(element).addClass("active");
        }
        else {
            $(element).removeClass("active");
        }
    },

    update: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (valueUnwrapped === true) {
            $(element).addClass("active");
        }
        else {
            $(element).removeClass("active");
        }
    }
}

/* progressBarContainerType - adds 'progress-' class for the string value assigned
* note both a value of "" and null will remove ALL progress- classes from the element
* with the exception of the 'progress-striped' class
* also note this is used for typing the container itself, not the individual bar
*/
var validProgressBarTypes = ["danger", "success", "info", "warning"];

ko.bindingHandlers.progressBarContainerType = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if ($.inArray(valueUnwrapped, validProgressBarTypes) > -1) {
            if (valueUnwrapped != "" && valueUnwrapped) {
                $(element).addClass("progress-" + valueUnwrapped);
            }
        }
    },

    update: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);
        var isStriped = ko.utils.unwrapObservable(allBindings.progressBarContainerIsStriped);

        // remove all existing alert- classes
        $(element).removeClass(function (index, css) {
            return (css.match(/\bprogress-\S+/g) || []).join(' ');
        });

        if (isStriped) { $(element).addClass("progress-striped"); }

        // add the bound progress bar type
        if ($.inArray(valueUnwrapped, validProgressBarTypes) > -1) {
            if (valueUnwrapped != "" && valueUnwrapped) {
                $(element).addClass("progress-" + valueUnwrapped);
            }
        }
    }
}

/* progressBarIsBar - setup needed classes for an individual progress bar
* note this bindings applies to the individual bar, not the container */
ko.bindingHandlers.progressBarIsBar = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (valueUnwrapped === true) {
            $(element).addClass("bar");
        }
        else {
            $(element).removeClass("bar");
        }
    },

    update: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (valueUnwrapped === true) {
            $(element).addClass("bar");
        }
        else {
            $(element).removeClass("bar");
        }
    }
}

/* progressBarType - adds 'bar-' class for the string value assigned
* note this is used for typing the individual bar */
ko.bindingHandlers.progressBarType = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if ($.inArray(valueUnwrapped, validProgressBarTypes) > -1) {
            if (valueUnwrapped != "" && valueUnwrapped) {
                $(element).addClass("bar-" + valueUnwrapped);
            }
        }
    },

    update: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        // remove all existing alert- classes
        $(element).removeClass(function (index, css) {
            return (css.match(/\bbar-\S+/g) || []).join(' ');
        });

        // add the bound progress bar type
        if ($.inArray(valueUnwrapped, validProgressBarTypes) > -1) {
            if (valueUnwrapped != "" && valueUnwrapped) {
                $(element).addClass("bar-" + valueUnwrapped);
            }
        }
    }
}

/* progressBarWidth - sets the width of the individual bar */
ko.bindingHandlers.progressBarWidth = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (ko.utils.isValidProgressBarWidth(valueUnwrapped)) {
            $(element).attr("style", "width: " + valueUnwrapped + "%");
        }
        else {
            $(element).removeAttr("style");
        }
    },

    update: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (ko.utils.isValidProgressBarWidth(valueUnwrapped)) {
            $(element).attr("style", "width: " + valueUnwrapped + "%");
        }
        else {
            $(element).removeAttr("style");
        }
    }
}



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


/*
* Helper Methods
*/

/* Used by the 'progressBarWidth' binding: Tests if the width is a valid integer value (between 0 and 100) */
ko.utils.isValidProgressBarWidth = function (value) {
    if ((parseFloat(value) == parseInt(value)) && !isNaN(value)) {
        if (value >= 0 && value <= 100) {
            return true;
        }
        else { return false; }
    } else {
        return false;
    }
}
