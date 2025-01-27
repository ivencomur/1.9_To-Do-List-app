function newItem() {
  let inputValue = $('#input').val();
  
  if (inputValue === '') {
      alert("You must write something!");
      return;
  }

  let li = $('<li></li>');
  li.append(inputValue);

  let crossOutButton = $('<crossOutButton></crossOutButton>');
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

  $('#list').sortable();
}

$(document).ready(function() {
  $('#list').sortable();
  
  $('#input').keydown(function(event) {
      if (event.keyCode === 13) {
          event.preventDefault();
          newItem();
      }
  });
});