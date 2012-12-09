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
* Popover 
*/

/* popoverSetup - initializes a popover */
ko.bindingHandlers.popoverSetup = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        var options = allBindings.popoverOptions;

        if (valueUnwrapped === true) {
            if (options == null) {
                $(element).popover(options); // setup default popover, otherwise popoverOptions initializer will handle
            }
        }
    }
}

/* popoverTitle - the popover text itself */
ko.bindingHandlers.popoverTitle = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        $(element).attr("title", valueUnwrapped);

    },

    update: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        var options = allBindings.popoverOptions || {};

        $(element).popover('destroy'); // destroy the existing popover
        $(element).attr("title", valueUnwrapped);
        $(element).popover(ko.utils.popoverBuildOptions(options)); // recreate popover

    }
}

/* popoverTitle - the popover content */
ko.bindingHandlers.popoverContent = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        $(element).attr("data-content", valueUnwrapped);

    },

    update: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        var options = allBindings.popoverOptions || {};

        $(element).popover('destroy'); // destroy the existing popover
        $(element).attr("data-content", valueUnwrapped);
        $(element).popover(ko.utils.popoverBuildOptions(options)); // recreate popover

    }
}

/* popoverAction - runs the action against the target specified in the
* 'popoverTarget' binding. The 'popoverTarget' binding should be the id
* of the element containing the popover. Likely whatever you
* bound 'popoverSetup' to. 
* NOTE: if you use this binding, then you should set 'trigger' to 'manual' in
* your popoverOptions binding */
var validpopoverActionTypes = ["show", "hide", "toggle"];

ko.bindingHandlers.popoverAction = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        var target = ko.utils.unwrapObservable(allBindings.popoverTarget);

        if ($.inArray(valueUnwrapped, validpopoverActionTypes) > -1) {

            $(element).unbind('click');
            var targetDivIdSelector = '#' + target;

            if (target !== "" && target) {

                $(element).click(function (event) {

                    event.preventDefault();

                    switch (valueUnwrapped) {
                        case "show":
                            $(targetDivIdSelector).popover('show');
                            allBindings.collapseIsOpen(true);
                            break;
                        case "hide":
                            $(targetDivIdSelector).popover('hide');
                            allBindings.collapseIsOpen(false);
                            break;
                        case "toggle":
                            $(targetDivIdSelector).popover('toggle');
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

        var target = ko.utils.unwrapObservable(allBindings.popoverTarget);

        if ($.inArray(valueUnwrapped, validpopoverActionTypes) > -1) {

            $(element).unbind('click');
            var targetDivIdSelector = '#' + target;

            if (target !== "" && target) {

                $(element).click(function (event) {

                    event.preventDefault();

                    switch (valueUnwrapped) {
                        case "show":
                            $(targetDivIdSelector).popover('show');
                            break;
                        case "hide":
                            $(targetDivIdSelector).popover('hide');
                            break;
                        case "toggle":
                            $(targetDivIdSelector).popover('toggle');
                            break;
                        default:
                            break;
                    }
                });
            }
        }
    }
}

/* popoverOptions - handles changing any popover options */
ko.bindingHandlers.popoverOptions = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);
        
        $(element).popover(ko.utils.popoverBuildOptions(valueUnwrapped)); // create popover with specified options
    },

    update: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        $(element).popover('destroy'); // destroy the existing popover
        $(element).popover(ko.utils.popoverBuildOptions(valueUnwrapped)); // recreate popover
    }
}


/*
* Helper Methods
*/
/* Used to build popover options */
ko.utils.popoverBuildOptions = function (popoverOptionsUnwrapped) {

    var placementUnwrapped = ko.utils.unwrapObservable(popoverOptionsUnwrapped.placement);
    var animationUnwrapped = ko.utils.unwrapObservable(popoverOptionsUnwrapped.animation);
    var htmlUnwrapped = ko.utils.unwrapObservable(popoverOptionsUnwrapped.html);

    // unwrap delays if not a pure number (allows for delay individual hide/show to be tied to observables)
    var delayUnwrapped = ko.utils.unwrapObservable(popoverOptionsUnwrapped.delay);

    if (delayUnwrapped && typeof delayUnwrapped != 'number') {

        var popoverDelayShowUnwrapped = ko.utils.unwrapObservable(delayUnwrapped.show);
        var popoverDelayHideUnwrapped = ko.utils.unwrapObservable(delayUnwrapped.hide);

        delayUnwrapped = { show: popoverDelayShowUnwrapped, hide: popoverDelayHideUnwrapped };
    }

    // check trigger type
    var validpopoverTriggerTypes = ["click", "hover", "focus", "manual"];
    var triggerUnwrapped = ko.utils.unwrapObservable(popoverOptionsUnwrapped.trigger);

    if ($.inArray(triggerUnwrapped, validpopoverTriggerTypes) == -1)
    {
        triggerUnwrapped = null;
    }


    var popoverOptionsBuilt = {};

    if (placementUnwrapped)
    {
        popoverOptionsBuilt.placement = placementUnwrapped;
    }

    if (animationUnwrapped != null) {
        popoverOptionsBuilt.animation = animationUnwrapped;
    }

    if (htmlUnwrapped != null) {
        popoverOptionsBuilt.html = htmlUnwrapped;
    }

    if (delayUnwrapped) {
        popoverOptionsBuilt.delay = delayUnwrapped;
    }

    if (triggerUnwrapped) {
        popoverOptionsBuilt.trigger = triggerUnwrapped;
    }

    return popoverOptionsBuilt;
}

