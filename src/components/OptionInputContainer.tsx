const OptionInputContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="flex flex-col mt-4">{children}</div>;
};

export default OptionInputContainer;
