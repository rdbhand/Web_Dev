let todoList = JSON.parse(localStorage.getItem("todoApp")) || [];

function display_todo() {
  let display_ele = document.querySelector("#display");
  display_ele.innerHTML = ``;
  for (let i = 0; i < todoList.length; i++) {
    let ele1 = document.createElement("h3");
    ele1.textContent = `${todoList[i].todo}`;
    display_ele.appendChild(ele1);

    let ele2 = document.createElement("h3");
    ele2.textContent = `${todoList[i]._date}`;
    display_ele.appendChild(ele2);

    let del_bt = document.createElement("button");
    del_bt.textContent = `Delete`;
    del_bt.setAttribute("data-index", i);
    del_bt.addEventListener("click", delete_todo);
    display_ele.appendChild(del_bt);
  }
}

function add_todo() {
  let input_ele = document.querySelector("#todo_input");
  let new_todo = input_ele.value;

  let date_ele = document.querySelector("#date_input");
  let new_date = date_ele.value;

  if (new_todo && new_date) {
    let todo_obj = {
      todo: new_todo,
      _date: new_date,
    };
    todoList.push(todo_obj);
    localStorage.setItem("todoApp", JSON.stringify(todoList));
    input_ele.value = "";
    date_ele.value = "";
    display_todo();
  }
}

function delete_todo(event) {
  let index = event.target.getAttribute("data-index");
  todoList.splice(index, 1);
  localStorage.setItem("todoApp", JSON.stringify(todoList));
  display_todo();
}

display_todo();
