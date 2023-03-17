const InputView = ({ onSubmit }) => {
  const Form = document.querySelector("form");
  Form.addEventListener("submit", onSubmit);
};

export default InputView;
