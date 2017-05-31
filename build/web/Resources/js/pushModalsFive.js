//PUSH MODAL
$(document).ready(function() {
    (function modalClick() {
        var buttons = document.querySelectorAll('.btn-trigger');
        for (var i = 1; i <= buttons.length; i++) {
            eval('var triggerBttn' + i + ' = document.getElementById("trigger-overlay-' + i + '" );');
            eval('triggerBttn' + i + '.addEventListener("click", toggleOverlay);');
        }

        for (var x = 0; x < buttons.length; x++) {
            buttons[x].onclick = function() {
                var index = this.getAttribute('id');
                var number = index.slice(-1);
                for (var y = 1; y <= buttons.length; y++) {
                    $('.modal-' + y).hide();
                }
                $('.modal-' + number).show();
            };
        }

        var modalContainer = document.querySelector('.modalContainer');
        var overlay = document.querySelector('div.overlay');
        var closeBttn = overlay.querySelector('div.overlay-close');
        var closeBttnOrange = overlay.querySelector('.btn-close-orange');
        var transEndEventNames = {
                'WebkitTransition': 'webkitTransitionEnd',
                'MozTransition': 'transitionend',
                'OTransition': 'oTransitionEnd',
                'msTransition': 'MSTransitionEnd',
                'transition': 'transitionend'
            },
            transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
            support = {
                transitions: Modernizr.csstransitions
            };

        function toggleOverlay() {
            if (classie.has(overlay, 'open')) {
                classie.remove(overlay, 'open');
                classie.remove(modalContainer, 'overlay-open');
                $('body').removeClass('stop-scrolling');
                classie.add(overlay, 'close');
                var onEndTransitionFn = function(ev) {
                    if (support.transitions) {
                        if (ev.propertyName !== 'visibility') return;
                        this.removeEventListener(transEndEventName, onEndTransitionFn);
                    }
                    classie.remove(overlay, 'close');
                };
                if (support.transitions) {
                    overlay.addEventListener(transEndEventName, onEndTransitionFn);
                } else {
                    onEndTransitionFn();
                }
                //Remove fixed position on header when modal is closed
                //$('header').removeClass('fixed-position');
            } else if (!classie.has(overlay, 'close')) {
                classie.add(overlay, 'open');
                classie.add(modalContainer, 'overlay-open');
                $('body').addClass('stop-scrolling');
                //$('body').bind('touchmove', function(e) {
                //e.preventDefault()
                //});
                //Stop scrolling of header when modal is open
                //$('header').addClass('fixed-position');
            }

        }

        $('.overlay .btn-close').click(function(e) {
            $('body').bind('touchmove', function(e) {
                return true;
            });
        });

        closeBttn.addEventListener('click', toggleOverlay);
        closeBttnOrange.addEventListener('click', toggleOverlay);

    })();

    /*blurEffect js*/
    $('.btn-trigger').click(function() {
        $(".header, .floating-container, .st-container").addClass("blurEffect");
    });
    $('.overlay-close,.btn-close-orange').click(function() {
        $(".header, .floating-container, .st-container").removeClass("blurEffect");
    });

});
