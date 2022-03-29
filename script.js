window.addEventListener("load", () => {
  const form = document.getElementById("new-task-form");
  const input = document.getElementById("new-task-input");
  const list_el = document.getElementById("tasks");
  const count = document.getElementById("container");

  const elem = document.createElement("span");
  count.appendChild(elem);
  input.addEventListener("input", evt =>{
    elem.innerText = input.value && lengthOfFirstWord(input.value)
  });

  function lengthOfFirstWord(str){

    let length = 0;
    
    for(let i = 0; i < str.length; i++){
    if(str[i] !== ++length)continue;
    if(length) break;
    }
    return (length);
  }


  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;

    if (!task) {
      alert("Please enter a task");
      return;
    }

    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const task_content_el = document.createElement("div");
    const task_content_holder = document.createElement("span");
    task_content_el.classList.add("content");

    task_content_holder.innerText = task;
    task_content_el.appendChild(task_content_holder);

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.setAttribute("hidden", "hidden");
    task_input_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el);

    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");

    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML = "Edit";

    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerHTML = "DELETE";

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);
    input.value = "";

    task_edit_el.addEventListener("click", () => {
      if (task_edit_el.innerText.toLowerCase() == "edit") {
        task_input_el.removeAttribute("hidden");
        task_input_el.removeAttribute("readonly");

        task_content_holder.style.display = "none";
        task_input_el.value = task_content_holder.textContent;

        task_input_el.focus();
        task_edit_el.innerText = "Save";
      } else {
        task_input_el.setAttribute("hidden", "hidden");
        task_input_el.setAttribute("readonly", "readonly");

        task_content_holder.innerText = task_input_el.value;
        task_content_holder.style.display = null;

        task_edit_el.innerText = "Edit";
      }
    });

    task_delete_el.addEventListener("click", () => {
      list_el.removeChild(task_el);
    });
  });
});
  //   const elem = document.createElement("span");
  //   document.body.appendChild(elem);

  //   input.addEventListener("input", evt => {
  //     elem.innerText = input.value && initials(input.value);
  //   });

  //   function initials(string) {
  //     return string
  //       .replace(/\s+/g, ' ')
  //       .replace(/[^a-z\s]/ig, '')
  //       .split(/\s/)
  //       .map(word => `${word[0].toUpperCase()}.`)
  //       .join('');
  //   }
  