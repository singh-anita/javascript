var ul = document.querySelector('#todoslist'),
    addButton = document.getElementById('add'),
    item = document.querySelector('#item');
var itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));

var data = JSON.parse(localStorage.getItem('items'));

// creates a list
var ConstructList = (text) => {




    const li = document.createElement('li');
    li.textContent = text;
   // ul.appendChild(li);
    var removeButton = document.createElement('button');
    removeButton.appendChild(document.createTextNode("X"));
    // removeButton.setAttribute('onClick','removeName('+i+')');
    li.appendChild(removeButton);
    ul.appendChild(li);
}

/*addButton.onclick = () => {
    ConstructList(ul);
  };*/
addButton.addEventListener('click', function (e) {
    e.preventDefault();
    itemsArray.push({text: item.value, status: false});
    // itemsArray.push(item.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    // list.innerHTML += '<li>' + item.value + '</li>';
    ConstructList(item.value);
    item.value = "";
}, false)

data.forEach(item => {
    ConstructList(item.text);
});
// function store() {
//     localStorage.setItem('items', JSON.stringify(itemsArray));
//     // window.localStorage.myitems = list.innerHTML;
// }