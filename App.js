let input = document.getElementById("myInput");
let addBtn = document.getElementById("addBtn");
let myList = document.getElementById("myList");

addBtn.addEventListener("click" , function(){
    let task = input.value
    if(task === "")
        return
    let li = document.createElement("li")
    li.textContent = text

    myList.appendChild(li)
    input.value = ""
})
addBtn.addEventListener("click", function() {
    let task = input.value
    if (task === "") return

    let li = document.createElement("li")
    li.textContent = task

    
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "❌"
    deleteBtn.addEventListener("click", function() {
        li.remove() 
    })

    li.appendChild(deleteBtn)
    myList.appendChild(li)
    input.value = ""
})