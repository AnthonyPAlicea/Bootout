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

                    switch (valueUnwrapped) {
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

                    switch (valueUnwrapped) {
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