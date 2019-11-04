$('#addskill').on('click', function(evt) {
    let list = $('#input').val();
    $('#list').append('<li><button>X</button>' + ' ' +list+'</li>');
    $('#input').val('');
    return false;

});$('ul').on('click', 'button', function() {
    $(this).closest('li').remove();
  });