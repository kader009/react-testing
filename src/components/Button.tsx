interface ButtonCom {
  ActionButton: string;
}
const Button = ({ ActionButton }: ButtonCom) => {
  return <button>Help me {ActionButton}</button>;
};

export default Button;
