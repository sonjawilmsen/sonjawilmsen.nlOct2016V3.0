function main() {
	$('#about').hide();
  $('#about').fadeIn(1000);

  $(".social-media").hide();
  $(window).scroll(function() {
      if ($(window).scrollTop() > 1000) {
          $(".social-media").fadeIn("slow");
      }
  });
}

$(document).ready(main);
