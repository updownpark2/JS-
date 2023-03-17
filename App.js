import InputView from "./InputView.js";
import { MakeForm } from "./MakeForm.js";
import TodoModel from "./TodoModel.js";

function App({ root }) {
  let todoArr = [];

  MakeForm({ root: root });
  InputView({
    onSubmit: (event) => {
      event.preventDefault();
      const todo = event.target[0].value;
      todoArr = [...todoArr, todo];
      TodoPaint(todoArr);
      ResetInput(event);
    },
  });

  const TodoPush = (todoArr, todo) => {
    todoArr = [...todoArr, todo];
  };

  const TodoPaint = (todoArr) => {
    const Ul = document.querySelector("ul");
    Ul.innerHTML = `${todoArr
      .map((todo) => `<li>${todo}<button>🖍</button></li>`)
      .join(``)}`;
  };

  const ResetInput = (event) => {
    event.target[0].value = ``;
  };
}

export default App;
