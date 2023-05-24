const $get = document.querySelector.bind(document);
const $getall = document.querySelectorAll.bind(document);
const TODOS_STORAGE_KEY = "todoskey";

function todoApp() {
  var generator = $get('.todos__generator');
  var input = $get('#todos__input');
  var todos = $get('.todos__list');
  var submitBtn = $get("#todos__submit");

  var list = [{
    title: "Hey",
    progress: false
  }];


  function renderTodosList() {
    if (list.length === 0) return;

    var html = list.map(function(todo, index) {
      return /*html*/`
      <li class="${todo.progress ? "completed" : ""}">
        <p>${index + 1}. ${todo.title}</p>
        <i class='bx bx-trash'></i>
      </li>
      `;
    });

    todos.innerHTML = html.join('\n');
  }

  function addTodo(title) {
    {
      let validatedTitle = "";
      validatedTitle = title.trim();
      validatedTitle = title.replace(/  +/g, " ");
      title = validatedTitle;
    }

    var newTodo = {
      title,
      progress: false
    };
    
    if (!list.find(todo => todo.title === newTodo.title)) {
      list.push(newTodo);
    }
  }

  function markAsDone(element, index) {
    element.classList.toggle('completed');
    list[index].progress = !list[index].progress;
  }

  function removeTodo(element, index) {
    {
      let array1 = list.slice(0, index);
      let array2 = list.slice(index + 1, list.length);
      list = array1.concat(array2);
    }
    element.remove();
  }

  function setActions() {
    if (list.length == 0) return;
    var todos = $getall('.todos__list li');

    todos.forEach((todo, index) => {
      todo.onclick = function(evt) {
        if (evt.currentTarget == evt.target) {
          markAsDone(this, index);
          saveConfig();
        }
      }

      todo.querySelector("i").onclick = function() {
        removeTodo(this.parentElement, index);
        saveConfig();
        renderTodosList();
        setActions();
      }
    }); 
  }

  function getConfig() {
    list = JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY));
  }

  function saveConfig() {
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(list));
  }

  // generator.addEventListener('submit', function(evt) {
  //   // stop submit the for (just make use of submitting form event)
  //   evt.preventDefault();
    
  //   addTodo(input.value);
  //   // reset input field
  //   input.value = "";

  //   // update the list
  //   {
  //     // get todos list saved on localstorage
  //     renderTodosList();
  //     setActions();
  //     saveConfig();
  //   }
  // });

  submitBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    
    addTodo(input.value);
    // reset input field
    input.value = "";

    // update the list
    {
      // get todos list saved on localstorage
      renderTodosList();
      setActions();
      saveConfig();
    }
  });

  getConfig();
  renderTodosList();
  setActions();
}


todoApp();