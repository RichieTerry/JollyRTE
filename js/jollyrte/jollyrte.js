(function($){
  $.fn.jollyEdit = function(options){
    /* Default jollyRTE settings */
    var settings = $.extend({
      color: "#ffffff",
      backgroundColor: "#333333",
    }, options );

    return this.each(function(){
      var editArea = $(this);
      var position = $(this).offset();

      /* Insert edit button and locate it under editable area */
      $('<div class="jollyEditBtn"><i class="icon-pencil"></i></div>').insertBefore(this);
      $('.jollyEditBtn').css({
        "background" : settings.backgroundColor,
        "color" : settings.color,
        "top" : (position.top) + "px",
        "left" : (position.left - 40)  + "px"
      });

      $('<div class="jollyHideBtn"><i class="icon-eye-off"></i></div>').insertBefore(this);
      $('.jollyHideBtn').css({
        "display" : "none",
        "background" : settings.backgroundColor,
        "color" : settings.color,
        "top" : (position.top) + "px",
        "left" : (position.left - 40)  + "px",
      });
      
      /* Bind function to edit button to make button show RTE */
      $('.jollyEditBtn').bind("click", function(e){
        e.preventDefault();
        editArea.jollyRTE(settings);
        $(this).hide();
        $('.jollyHideBtn').show();
      });

      /* Bind function to hide button to make button hide RTE */
      $('.jollyHideBtn').bind("click", function(e){
        e.preventDefault();
        editArea.hideRTE();
        $(this).hide();
        $('.jollyEditBtn').show();
      });
    });
  };

  $.fn.jollyRTE = function(settings){
    return this.each(function(){
      var width = $(this).css("width");
      var position = $(this).offset();

      $(this).css({
        "border" : "2px solid "+settings.backgroundColor,
        "cursor" : "text"
      });
      
      $('<div class="jollyRTE"><i class="icon-bold"></i><i class="icon-italic"></i></div>').insertBefore(this);
      $('.jollyRTE').css({
        "background" : settings.backgroundColor, 
        "color" : settings.color, 
        "top" : (position.top - 32) + "px",
        "left" : (position.left - 2)  + "px",
        "width" : width,
        "border" : "2px solid " + settings.backgroundColor
      });
    });
  };

  $.fn.hideRTE = function(){
    return this.each(function(){
      $(this).css({
        "border" : "none",
        "cursor" : "auto"
      });

      $('.jollyRTE').hide();
    });
  }
}(jQuery));