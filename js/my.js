//Declaring variables at the top
// homeActive applies 'active' class on document ready.
var homeActive = function() {
    $('#homenav').addClass('active');
  };

// activeTransfer removes and applies 'active' class to focused links.
var activeTransfer = function() {
  $('.navbar-inner').on('click', 'li', function() {
    $('li.active').removeClass('active');
     $(this).addClass('active');
  });
};

// var dropdownTransfer = function() {

// };

var bootstrapModal = function() {
  var $buttonAndModal =
  //This is the button and code for the modal together
        $('<a href="#myModal" role="button" class="btn" data-toggle="modal">PlayTime!!</a>\
          <div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
          <div class="modal-header">\
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>\
          <h3 id="myModalLabel">Alerts can be SEXY!</h3>\
          </div>\
          <div class="modal-body">\
          <img src="img/yarn.gif" alt="catToy">\
          <p>Modals are like attractive alert() boxes...</p>\
          <p>Look at how handsome I am...</p>\
          </div>\
          <div class="modal-footer">\
          <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>\
          <button class="btn btn-primary">Save changes</button>\
          </div>\
          </div>');
        $('#left').append($buttonAndModal);
};


/////////////////////////////////////////////////
$(document).ready(function(){
 homeActive();
 activeTransfer();
 bootstrapModal();
});