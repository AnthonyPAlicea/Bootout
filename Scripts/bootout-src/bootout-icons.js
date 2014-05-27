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
* Icons 
*/

/* bootstrapIcon - adds 'icon-' class for the string value assigned */
/* note both a value of "" and null will remove ALL icon- classes from the element */
ko.bindingHandlers.bootstrapIcon = {

    init: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        if (valueUnwrapped != "" && valueUnwrapped) {
            $(element).addClass("glyphicon").addClass("glyphicon-" + valueUnwrapped);
        }
    },

    update: function (element, valueAccessor, allBindingsAccessor) {

        var value = valueAccessor(), allBindings = allBindingsAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);

        // remove all existing glyphicon- classes
        $(element).removeClass(function (index, css) {
            return (css.match(/\bglyphicon-\S+/g) || []).join(' ');
        });

        // add the bound icon class
        if (valueUnwrapped != "" && valueUnwrapped) {
            $(element).addClass("glyphicon-" + valueUnwrapped);
        }
    }
}