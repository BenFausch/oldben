(function() {
  $(".icon").on('tap', function() {
    $(this).toggleClass('active');
    return $('.tap').addClass('active');
  });

  $(".icon").bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function() {
    return $('.tap').removeClass('active');
  });

}).call(this);
