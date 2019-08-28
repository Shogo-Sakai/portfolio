// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery 
//= require rails-ujs
//= require materialize-sprockets
//= require activestorage
//= require turbolinks
//= require_tree .


// parallax
$(document).on('ready turbolinks:load', function(){
  
  $('.parallax').parallax();
});

$(document).on('ready turbolinks:load', function() {
  M.Modal._count = 0;
  var elems = document.querySelectorAll('.modal');
  var options ={
    opacity: 0.6,
    inDuration: 500
  };
  M.Modal.init(elems, options);
});