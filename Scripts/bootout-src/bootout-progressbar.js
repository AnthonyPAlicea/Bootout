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
* Progress Bars 
*/

/* progressBarContainerSetup - setup needed classes for an progress bar containing div */
/* note this is only an initializer, does not track updates */
ko.bindingHandlers.progressBarContainerSetup = {

    init: function (element, valueAccessor, allBindingsAccessor) {

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

/* progressBarSetup - setup needed classes for an individual progress bar
* note this bindings applies to the individual bar, not the container */
/* also note this is only an initializer, does not track updates */
ko.bindingHandlers.progressBarSetup = {

    init: function (element, valueAccessor, allBindingsAccessor) {

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