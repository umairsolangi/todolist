function addtodo(){
    var list = document.getElementById("list")
    var todoitem = document.getElementById("todo-item")
    var li = document.createElement("li")
    li.setAttribute("class","li-item")
    var litext = document.createTextNode(todoitem.value)
    li.appendChild(litext)
    list.appendChild(li)
    console.log(litext)

    todoitem.value = " "







var delbtn = document.createElement("button")
var btntext = document.createTextNode("Delete")
delbtn.setAttribute("onclick", "deleteitem(this)")
delbtn.setAttribute("class", "lidelbtn")
li.appendChild(delbtn)
delbtn.appendChild(btntext)


var editbtn = document.createElement("button")
var editbtntext = document.createTextNode("Edit")
editbtn.setAttribute("onclick", "edititem(this)")
editbtn.setAttribute("class", "editcolor")
li.appendChild(editbtn)
editbtn.appendChild(editbtntext)

}

function deleteitem(e){
e.parentNode.remove();
}

function edititem(e){
    var editvalue = prompt("Update Your Value", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = editvalue

}


function delall(){
    list.innerHTML = ""
}