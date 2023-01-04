const Input = ({ type, label, placeholder }) => {
  return (
    <div className="flex flex-col">
      <label className="font-semibold pl-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="p-2 rounded-md mt-2 outline-offset-0 outline-purple-500 text-xl"
      />
    </div>
  );
};

export default Input;
