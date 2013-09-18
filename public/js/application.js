$(document).ready(function() {                          //1
  $('form').submit(function(event) {

    event.preventDefault();                             //2
                                                        //3      
      var url = $(this).attr('action')
      var random = Math.floor(Math.random() * 6) + 1;   //4
      var data = {value: random}

    $.post('/rolls', data, function(respond) {               //5
      console.log(respond);

    $('#die').html(respond);
    });
  });
});
  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- generate a random number between 1 and 6 using JavaScript
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery


