var ul = document.querySelector('#todoslist'),
    addButton = document.getElementById('add'),
    item = document.querySelector('#item');
var itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));

var data = JSON.parse(localStorage.getItem('items'));

// creates a list
var ConstructList = (text) => {
    let list = document.createElement('li');
    list.textContent = text;
    list.id = `list_ ${Date.now().toString()}`;
   // ul.appendChild(list);
    var removeButton = document.createElement('button');
    removeButton.appendChild(document.createTextNode("X"));
    // removeButton.setAttribute('onClick','removeName('+i+')');
    list.appendChild(removeButton);
    ul.appendChild(list);
}
	
// varv  timeStamp = Math.floor(Date.now());
addButton.onclick = () => {
    // e.preventDefault();
    if(item.value.length>0){
    itemsArray.push({text: item.value, status: false});
    // itemsArray.push(item.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    // list.innerHTML += '<li>' + item.value + '</li>';
    ConstructList(item.value);
    item.value = "";
    }
    else{
       nameError = "Please enter your name";
       document.getElementById("item_error").innerHTML = nameError; 
      // button.disable = button.disable;
      return false;
    }
    
  };

//This will display all existing stored information on the front end every time we open the app.
data.forEach(item => {
    ConstructList(item.text);
});
