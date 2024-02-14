const task = document.getElementById("box");
const addButton =  document.getElementById("add");
const task_list = document.getElementById("list_item");
const date = document.getElementById("date");
const prio = document.getElementById("prio");

window.onload = showList();

addButton.addEventListener('click' , ()=>{
    if (task.value != ""){
        const item = task.value;
        const make_li = document.createElement("li");
        make_li.innerHTML=`<input type="checkbox" class="checkbox"><div align="center" class="listvalue">${item}<br>Deadline : ${date.value}<br>Priority : ${prio.value}</div><button class="delete"></button>`;
        list_item.appendChild(make_li);
        task.value=" ";
        document.getElementById("date").innerHTML="";
        storage();
        document.getElementById("display").innerHTML = "Task added successfully!";
       
    }
    else{
        alert("Enter a list item");
    }
});

task_list.addEventListener('click' ,(event)=>{
    
    if(event.target.classList.contains("checkbox")){
        const list_item = event.target.parentElement;
        list_item.classList.toggle('checked');
        storage();
        document.getElementById("display").innerHTML = "You did it !!";
       
        
    }

    if((event).target.classList.contains("delete")){
        const list_item = event.target.parentElement;
        task_list.removeChild(list_item);
        storage();
        document.getElementById("display").innerHTML = "Task deleted successfully!";
        
    }
    
});

function clrList(){
    alert("Are you sure you want to delete your entire list");
    task_list.innerHTML ="";
    storage();
    document.getElementById("display").innerHTML = "Entire tasks are deleted successfully!"
}

function storage(){
    localStorage.setItem("data",task_list.innerHTML);
}

function showList(){
    task_list.innerHTML = localStorage.getItem("data");
}       