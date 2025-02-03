function newItem() {
    let inputValue = $('#input').val();
    
    if (inputValue === '') {
        alert("Please, write something!");
        return;
    }

    let li = $('<li class="ui-state-default"></li>');
    
    let dragHandle = $('<span class="ui-icon ui-icon-arrowthick-2-n-s"></span>');
    li.append(dragHandle);
    
    li.append(inputValue);

    let checkbox = $('<input type="checkbox"/>');
    checkbox.on('click', function() {
        li.toggleClass('completed');
    });
    li.append(checkbox);

    let crossOutButton = $('<button></button>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    $('#list').append(li);
    
    $('#input').val('');

    li.on("dblclick", function() {
        li.toggleClass("strike");
        setTimeout(() => li.remove(), 300);
    });

    crossOutButton.on("click", function() {
        li.addClass("delete");
        setTimeout(() => li.remove(), 300);
    });
}

$(document).ready(function() {
    $('#list').sortable();
    
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