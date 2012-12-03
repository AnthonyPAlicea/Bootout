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
* Button 
*/
/* buttonSetup - Adds classes and attributes for a button. */
/* note this is only an initializer, does not track updates */
ko.bindingHandlers.buttonSetup = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (valueUnwrapped === true) {

            // alert css classes and attributes
            $(element).addClass("btn").alert();

        }
    }
}

/* buttonType - adds 'btn-' class for the string value assigned
* note both a value of "" and null will remove ALL btn- classes from the element
* with the exception of the 'btn-block' class and button size classes */
var validButtonTypes = ["default", "primary", "info", "success", "warning", "danger", "inverse", "link"];
var validButtonSizes = ["default", "large", "small", "mini"];

ko.bindingHandlers.buttonType = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if ($.inArray(valueUnwrapped, validButtonTypes) > -1) {
            if (valueUnwrapped != "" && valueUnwrapped) {
                $(element).addClass("btn-" + valueUnwrapped);
            }
        }
    },

    update: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);
        var buttonIsBlock = ko.utils.unwrapObservable(allBindings.buttonIsBlock);
        var buttonSize = ko.utils.unwrapObservable(allBindings.buttonSize);

        // remove all existing btn- classes
        $(element).removeClass(function (index, css) {
            return (css.match(/\bbtn-\S+/g) || []).join(' ');
        });

        if (buttonIsBlock) { $(element).addClass("btn-block"); }

        if (buttonSize === "" || $.inArray(buttonSize, validButtonSizes)) {
            $(element).addClass("btn-" + buttonSize);
        }

        // add the bound alert type
        if ($.inArray(valueUnwrapped, validButtonTypes) > -1) {
            if (valueUnwrapped != "" && valueUnwrapped) {
                $(element).addClass("btn-" + valueUnwrapped);
            }
        }
    }
}

/* buttonText - The text of the button */
ko.bindingHandlers.buttonText = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        var val = $(element).is('input') ? 'val' : 'html';
        $(element)[val](valueUnwrapped);

    },

    update: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        var val = $(element).is('input') ? 'val' : 'html';
        $(element)[val](valueUnwrapped);

    }
}

/* buttonDisable - Disable/Enable the button */
ko.bindingHandlers.buttonDisable = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (valueUnwrapped === true) {
            $(element).addClass("disabled");
        }
        else {
            $(element).removeClass("disabled");
        }

    },

    update: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (valueUnwrapped === true) {
            $(element).addClass("disabled");
        }
        else {
            $(element).removeClass("disabled");
        }

    }
}


/* buttonIsSelected - Select/Unselect the button */
ko.bindingHandlers.buttonIsSelected = {

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

    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

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


/* buttonGroupSetup - Adds classes and attributes for a button group. */
/* note this is only an initializer, does not track updates */
ko.bindingHandlers.buttonGroupSetup = {

    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (valueUnwrapped === true) {

            // alert css classes and attributes
            $(element).addClass("btn-group").alert();

        }
    }
}

/* buttonGroupIsVertical- Set the button group as vertical */
ko.bindingHandlers.buttonGroupIsVertical = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (valueUnwrapped === true) {
            $(element).addClass("btn-group-vertical");
        }
        else {
            $(element).removeClass("btn-group-vertical");
        }

    },

    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (valueUnwrapped === true) {
            $(element).addClass("btn-group-vertical");
        }
        else {
            $(element).removeClass("btn-group-vertical");
        }

    }
}