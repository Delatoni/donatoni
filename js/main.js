$(document).ready(function() {

    /* Magnific Image Popup Code */
    $('.modal-image').magnificPopup({
        delegate: 'a',
        type: 'image',
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    });

    /* Magnific Gallery Popup Code */
    $('.gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function(item) {
                return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
            }
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }

    });

    /* Instafeed Code */
    var userFeed = new Instafeed({
        get: 'user',
        userId: 47389409,
        accessToken: '47389409.467ede5.0b5342ac65fa46818d7e61b80908dc33',
        clientId: 'd6f66ebf999f43a18f9f02e06339e71e',
        template: '<a class="wow" title="{{caption}}" data-source="{{link}}" href="{{image}}"><img src="{{image}}" /></a>',
        resolution: 'standard_resolution',
        limit: 8,
    });
    userFeed.run();
    $('#load-more').on('click', function() {
        userFeed.next();
    });

    /* jQuery Sidebar Code */
    $("aside").sidebar({side: "right"});
    $(".logo").trigger("sidebar:toggle");

    /* Wow.js Code */
    var wow = new WOW(
        {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       50,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        }
    }
    );
    wow.init();

});