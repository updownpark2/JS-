const root = document.getElementById("root");
const Form = document.createElement("form");
const Input = document.createElement("input");
const Button = document.createElement("button");
const Ul = document.createElement("ul");
root.appendChild(Form);
root.appendChild(Ul);
Form.appendChild(Input);
Form.appendChild(Button);

Input.placeholder = "Todolist";
Button.innerText = "제출!!!";

let todolist = [];

Form.addEventListener("submit", (event) => {
  event.preventDefault();
  todolist.push(event.target[0].value);
  event.target[0].value = "";
  Paint();
});

//데이터담기
//이제 데이터 그리기

function Paint() {
  const Ul = document.querySelector("ul");
  Ul.innerHTML = `${todolist
    .map(
      (item, index) =>
        `<li id=${index}>${item}<button class="REMOVE">삭젱</button></li>`
    )
    .join(``)}`;

  const RemoveButton = document.querySelectorAll(".REMOVE");
  RemoveButton.forEach((button) =>
    button.addEventListener("click", (event) => {
      console.log("asd");
      todolist = todolist.filter(
        (item, index) => index * 1 !== event.target.parentElement.id * 1
      );
      Paint();
    })
  );
}
