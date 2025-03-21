const Button = ({ children, onClick }) => {
  return (
    <button
      className="bg-blue-500 px-4 py-2 rounded-md shadow-xl"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
