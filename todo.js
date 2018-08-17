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
    list.id = `${Math.round(Math.random()*100)}`;
   // ul.appendChild(list);
   var removeButton = document.createElement('button');
    removeButton.appendChild(document.createTextNode("X"));
    // removeButton.setAttribute('onClick','removeName('+i+')');
    list.appendChild(removeButton);
    ul.appendChild(list);
}

/**
 * this 
 * @param {string} taskObj - the task text to be added { text: "sadrfgdsg", id: "asdasf"}
 */
function addItem(taskObj){
    //add loguic
}

/**
 * descriptionds efgdfgdf
 * @param {object} taskObj - { text: "asfadsgs", id: "safsadfs+0" }
 */ 
function updateItem(taskObj){
    //update logic
}

/**
 * sandasjfnb
 * @param {object} taskObj 
 */
function removeItem(taskObj){
    //remove logic
    taskObj["id"] = "tim";
    return taskObj
}



//return an object and recieve and object (roro)

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

 
