function newItem() {
  let inputValue = $('#input').val();
  
  if (inputValue === '') {
      alert("You must write something!");
      return;
  }

  let li = $('<li></li>');
  li.append(inputValue);

  let crossOutButton = $('<button></button>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  $('#list').append(li);
  $('#input').val('');

  li.on("dblclick", function() {
      li.toggleClass("strike");
  });

  crossOutButton.on("click", function() {
      li.addClass("delete");
  });

  $('#list').sorteable();
}

$(document).ready(function() {
  $('#list').sorteable();
  
  $('#input').keydown(function(event) {
      if (event.keyCode === 13) {
          event.preventDefault();
          newItem();
      }
  });

  $('#button').on('click', function() {
      newItem();
  });
});
