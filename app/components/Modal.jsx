import { Link } from '@remix-run/react';

const Modal = ({ children }) => {
  return (
    <Link to="..">
      <div className="grid fixed top-0 left-0 bg-gray-200/75 w-full h-screen place-content-center">
        {children}
      </div>
    </Link>
  );
};

export default Modal;
