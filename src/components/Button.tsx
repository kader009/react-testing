interface ButtonCom {
  ActionButton?: string;
}
const Button = ({ ActionButton='Ok' }: ButtonCom) => {
  return <button className="bg-black p-2 rounded text-white ml-2">Help me {ActionButton}</button>;
};

export default Button;
