const Container = ({ children, className }) => {
  return (
    <div className={`bg-gray-100 p-10 rounded-lg w-fit ${className}`}>
      {children}
    </div>
  );
};

export default Container;
