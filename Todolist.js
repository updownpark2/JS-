const root = document.getElementById("root");
const Form = document.createElement("form");
const Input = document.createElement("input");
const Button = document.createElement("button");
root.appendChild(Form);
Form.appendChild(Input);
Form.appendChild(Button);

Input.placeholder = "Todolist";
Button.innerText = "제출!!!";

let todolist;

Form.addEventListener("submit", (event) => {
  event.preventDefault();
  todolist = event.target[0].value;
  event.target[0].value = "";
  Paint();
});

//데이터담기

//이제 데이터 그리기

function Paint() {
  const Ul = document.createElement("ul");
  root.appendChild(Ul);
  Ul.innerHTML = `<li>${todolist}<button>삭젱</button></li>`;
}
