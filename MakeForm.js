export const MakeForm = ({ root }) => {
  const Form = document.createElement("form");
  const Input = document.createElement("input");
  const Button = document.createElement("button");
  const Ul = document.createElement("ul");
  root.appendChild(Form);
  Form.appendChild(Input);
  Form.appendChild(Button);
  root.appendChild(Ul);

  Input.placeholder = "Have To do 🗒";
  Button.innerText = `Push 🔖`;
};
