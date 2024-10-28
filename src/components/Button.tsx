interface Props {
  text: string;
  icon?: React.ReactNode;
  className?: string;
}
const Button: React.FC<Props> = ({ text, icon, className }) => {
  return (
    <button
      className={` ${
        className ? className : "bg-white"
      } border rounded-md px-3 py-2 flex gap-2 border-gray-300 capitalize font-medium font-poppins items-center`}
    >
      <div>{icon}</div>
      <div>{text}</div>
    </button>
  );
};
export default Button;
