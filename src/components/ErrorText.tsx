interface Props {
  text: string | undefined;
}
const ErrorText: React.FC<Props> = ({ text }) => {
  return (
    <span className="text-primaryColor font-poppins text-xs ml-1 drop-shadow-error">
      <div className={`${!text && "invisible "}`}>* {text}</div>
    </span>
  );
};

export default ErrorText;
