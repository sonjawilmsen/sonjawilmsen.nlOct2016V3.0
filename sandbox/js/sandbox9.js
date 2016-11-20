// shots = $(".test").fadeTo(0, 0.05);
//
// $('.featurette-container').scroll(function(d,h) {
//     shots.each(function(i) {
//         a = $(this).offset().top + $(this).height();
//         b = $('#sonja').scrollTop() + $('.featurette-container').height();
//         if (a < b) $(this).fadeTo(500,1);
//     });
// });


$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('.test').fadeIn(1000);
    }
});

//
// $('.test').fadeInScroll({
//   minDistance:  75 * $(window).height() / 100
// });
