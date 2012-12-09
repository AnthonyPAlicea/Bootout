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
* Tooltip 
*/

/* tooltipSetup - initializes a tooltip */
ko.bindingHandlers.tooltipSetup = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        var options = allBindings.tooltipOptions;

        if (valueUnwrapped === true) {
            if (options == null) {
                $(element).tooltip(options); // setup default tooltip, otherwise tooltipOptions initializer will handle
            }
        }
    }
}

/* tooltipTitle - the tooltip text itself */
ko.bindingHandlers.tooltipTitle = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        $(element).attr("title", valueUnwrapped);

    },

    update: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        var options = allBindings.tooltipOptions || {};

        $(element).tooltip('destroy'); // destroy the existing tooltip
        $(element).attr("title", valueUnwrapped);
        $(element).tooltip(ko.utils.tooltipBuildOptions(options)); // recreate tooltip

    }
}

/* tooltipAction - runs the action against the target specified in the
* 'tooltipTarget' binding. The 'tooltipTarget' binding should be the id
* of the element containing the tooltip. Likely whatever you
* bound 'tooltipSetup' to. 
* NOTE: if you use this binding, then you should set 'trigger' to 'manual' in
* your tooltipOptions binding */
var validTooltipActionTypes = ["show", "hide", "toggle"];

ko.bindingHandlers.tooltipAction = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        var target = ko.utils.unwrapObservable(allBindings.tooltipTarget);

        if ($.inArray(valueUnwrapped, validTooltipActionTypes) > -1) {

            $(element).unbind('click');
            var targetDivIdSelector = '#' + target;

            if (target !== "" && target) {

                $(element).click(function (event) {

                    event.preventDefault();

                    switch (valueUnwrapped) {
                        case "show":
                            $(targetDivIdSelector).tooltip('show');
                            allBindings.collapseIsOpen(true);
                            break;
                        case "hide":
                            $(targetDivIdSelector).tooltip('hide');
                            allBindings.collapseIsOpen(false);
                            break;
                        case "toggle":
                            $(targetDivIdSelector).tooltip('toggle');
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

        var target = ko.utils.unwrapObservable(allBindings.tooltipTarget);

        if ($.inArray(valueUnwrapped, validTooltipActionTypes) > -1) {

            $(element).unbind('click');
            var targetDivIdSelector = '#' + target;

            if (target !== "" && target) {

                $(element).click(function (event) {

                    event.preventDefault();

                    switch (valueUnwrapped) {
                        case "show":
                            $(targetDivIdSelector).tooltip('show');
                            break;
                        case "hide":
                            $(targetDivIdSelector).tooltip('hide');
                            break;
                        case "toggle":
                            $(targetDivIdSelector).tooltip('toggle');
                            break;
                        default:
                            break;
                    }
                });
            }
        }
    }
}

/* tooltipOptions - handles changing any tooltip options */
ko.bindingHandlers.tooltipOptions = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);
        
        $(element).tooltip(ko.utils.tooltipBuildOptions(valueUnwrapped)); // create tooltip with specified options
    },

    update: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        $(element).tooltip('destroy'); // destroy the existing tooltip
        $(element).tooltip(ko.utils.tooltipBuildOptions(valueUnwrapped)); // recreate tooltip
    }
}


/*
* Helper Methods
*/
/* Used to build tooltip options */
ko.utils.tooltipBuildOptions = function (tooltipOptionsUnwrapped) {

    var placementUnwrapped = ko.utils.unwrapObservable(tooltipOptionsUnwrapped.placement);
    var animationUnwrapped = ko.utils.unwrapObservable(tooltipOptionsUnwrapped.animation);
    var htmlUnwrapped = ko.utils.unwrapObservable(tooltipOptionsUnwrapped.html);

    // unwrap delays if not a pure number (allows for delay individual hide/show to be tied to observables)
    var delayUnwrapped = ko.utils.unwrapObservable(tooltipOptionsUnwrapped.delay);

    if (delayUnwrapped && typeof delayUnwrapped != 'number') {

        var tooltipDelayShowUnwrapped = ko.utils.unwrapObservable(delayUnwrapped.show);
        var tooltipDelayHideUnwrapped = ko.utils.unwrapObservable(delayUnwrapped.hide);

        delayUnwrapped = { show: tooltipDelayShowUnwrapped, hide: tooltipDelayHideUnwrapped };
    }

    // check trigger type
    var validTooltipTriggerTypes = ["click", "hover", "focus", "manual"];
    var triggerUnwrapped = ko.utils.unwrapObservable(tooltipOptionsUnwrapped.trigger);

    if ($.inArray(triggerUnwrapped, validTooltipTriggerTypes) == -1)
    {
        triggerUnwrapped = null;
    }


    var tooltipOptionsBuilt = {};

    if (placementUnwrapped)
    {
        tooltipOptionsBuilt.placement = placementUnwrapped;
    }

    if (animationUnwrapped != null) {
        tooltipOptionsBuilt.animation = animationUnwrapped;
    }

    if (htmlUnwrapped != null) {
        tooltipOptionsBuilt.html = htmlUnwrapped;
    }

    if (delayUnwrapped) {
        tooltipOptionsBuilt.delay = delayUnwrapped;
    }

    if (triggerUnwrapped) {
        tooltipOptionsBuilt.trigger = triggerUnwrapped;
    }

    return tooltipOptionsBuilt;
}

