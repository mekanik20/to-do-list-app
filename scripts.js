function newItem(){
//Adding a new to do item
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("Item must be typed to be added to the list");
  } else {
    $('#list').append(li);
  }

//Crossing a listed item out
  function crossOut() {
		li.toggleClass("strike");
	}

	li.on("dblclick", function crossOut() {
		li.toggleClass("strike");
	});

//Add a delete button
  let deleteButton = $('<deleteButton></deleteButton>');
  deleteButton.append(document.createTextNode('X'));
  li.append(deleteButton);

  deleteButton.on("click", deleteListItem);
  function deleteListItem(){
  li.addClass("delete")

   $('#list').sortable();
  }
}
