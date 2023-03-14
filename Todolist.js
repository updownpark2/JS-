const root = document.getElementById("root");
const Form = document.createElement("form");
const Input = document.createElement("input");
const Button = document.createElement("button");
root.appendChild(Form);
Form.appendChild(Input);
Form.appendChild(Button);

Input.placeholder = "Todolist";
Button.innerText = "제출!!!";
