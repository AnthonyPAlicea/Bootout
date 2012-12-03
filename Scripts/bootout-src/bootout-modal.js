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

            // prevent standard bootstrap handling of modal backdrops
            var backdropOption = options.backdrop;
            var backdropIsSetToDefault = ((!backdropOption && backdropOption !== false && backdropOption !== 'static') || backdropOption === true);

            // modal attributes
            $(element).attr("tabindex", "-1").attr("role", "dialog").attr("aria-hidden", true);
            if (allBindings.modalAriaLabelId) {
                $(element).attr("aria-labelledby", allBindings.modalAriaLabelId);
            }

            // modal css classes
            $(element).addClass("modal").addClass("hide").modal(options);

            // manually handle backdrop click, so that it updates observable bound to 'modalShow'
            if (backdropIsSetToDefault) {
                $(document).on("click", ".modal-backdrop", function () {

                    allBindings.modalShow(false);

                }).bind(allBindings);
            }
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

        // make certain the backdrop is removed
        $(element).on('hidden', function () { $(".modal-backdrop").remove(); });
    }
}