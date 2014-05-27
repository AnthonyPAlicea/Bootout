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
* Dropdown 
*/

/* dropdownSetup - Adds classes for a dropdown. */
/* note this is only an initializer, does not track updates */
ko.bindingHandlers.dropdownSetup = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (valueUnwrapped === true) {

            // dropdown css classes
            $(element).addClass("dropdown").dropdown();

        }
    }
}

/* dropdownSetup - Adds classes for a dropdown. */
/* note this is only an initializer, does not track updates */
ko.bindingHandlers.dropdownMenuSetup = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (valueUnwrapped === true) {

            // dropdown attributes
            $(element).attr("role", "menu");
            if (allBindings.modalAriaLabelId) {
                $(element).attr("aria-labelledby", allBindings.modalAriaLabelId);
            }

            // dropdown css classes
            $(element).addClass("dropdown-menu").dropdown();

        }
    }
}

/* dropdownIsOpen - Opens and closes the dropdown. */
ko.bindingHandlers.dropdownIsOpen = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (valueUnwrapped === true) {
            $(element).trigger("show").addClass("open").trigger("shown");
        }
        else {
            $(element).trigger("hide").removeClass("open").trigger("hidden");
        }
    },

    update: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (valueUnwrapped === true) {
            $(element).trigger("show").addClass("open").trigger("shown");
        }
        else {
            $(element).trigger("hide").removeClass("open").trigger("hidden");
        }
    }
}

/* dropdownAction - runs the action against the target specified in the
* 'dropdownTarget' binding. The 'dropdownTarget' binding should be the id
* of the element containing the collapsible area. Likely whatever you
* bound 'dropdownSetup' to. */
var validDropdownActionTypes = ["show", "hide", "toggle"];

ko.bindingHandlers.dropdownAction = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        var target = ko.utils.unwrapObservable(allBindings.dropdownTarget);

        if ($.inArray(valueUnwrapped, validDropdownActionTypes) > -1) {

            $(element).unbind('click');
            var targetDivIdSelector = '#' + target;

            if (target !== "" && target) {

                $(element).click(function (event) {

                    event.preventDefault();

                    switch (valueUnwrapped) {
                        case "show":
                            $(targetDivIdSelector).trigger("show").addClass("open").trigger("shown");
                            break;
                        case "hide":
                            $(targetDivIdSelector).trigger("hide").removeClass("open").trigger("hidden");
                            break;
                        case "toggle":
                            //$(targetDivIdSelector).dropdown('toggle');
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

        var target = ko.utils.unwrapObservable(allBindings.dropdownTarget);

        if ($.inArray(valueUnwrapped, validDropdownActionTypes) > -1) {

            $(element).unbind('click');
            var targetDivIdSelector = '#' + target;

            if (target !== "" && target) {

                $(element).click(function (event) {

                    event.preventDefault();

                    switch (valueUnwrapped) {
                        case "show":
                            $(targetDivIdSelector).trigger("show").addClass("open").trigger("shown");
                            break;
                        case "hide":
                            $(targetDivIdSelector).trigger("hide").removeClass("open").trigger("hidden");
                            break;
                        case "toggle":
                           // $(targetDivIdSelector).dropdown('toggle');
                            break;
                        default:
                            break;
                    }
                });
            }
        }
    }
}

/* dropdownOnShow - event handler for when show is initiated */
ko.bindingHandlers.dropdownOnShow = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        $(element).on('show', valueUnwrapped);
    }
}

/* dropdownOnShown - event handler for when show is completed */
ko.bindingHandlers.dropdownOnShown = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        $(element).on('shown', valueUnwrapped);
    }
}

/* dropdownOnHide - event handler for when hide is initiated */
ko.bindingHandlers.dropdownOnHide = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        $(element).on('hide', valueUnwrapped);
    }
}

/* dropdownOnHidden - event handler for when hide is completed */
ko.bindingHandlers.dropdownOnHidden = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        $(element).on('hidden', valueUnwrapped);
    }
}