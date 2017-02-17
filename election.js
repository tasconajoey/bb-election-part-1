$(document).ready(function() {

  // Imagination!
  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    dataType: 'json'
  }).done(function(responseData) {
    for (var step = 0; step < responseData.candidates.length; step++) {
      var name = responseData.candidates[step].name;
      var votes = responseData.candidates[step].votes;
      $('<li>').html(name + ' ' + votes).appendTo('#list');
    }
  });

});
