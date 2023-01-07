import { Link, NavLink } from '@remix-run/react';

const ExpensesNav = () => {
  return (
    <nav className="flex justify-between h-fit px-10 py-5 items-center text-xl">
      <Link to="/" className="flex items-center gap-5">
        <img src="images/logo.svg" alt="logo" className="h-20" />
        <h1 className="text-white font-bold text-2xl">RemixExpenses</h1>
      </Link>
      <div className="flex gap-5 font-semibold text-white">
        <Link to="/expenses">Manage Expenses</Link>
        <Link to="/expenses/analysis">Analyse Expenses</Link>
      </div>
      <NavLink
        to="/auth"
        className="bg-gray-600 hover:bg-gray-700 rounded-full px-7 py-2 font-semibold text-white"
      >
        Logout
      </NavLink>
    </nav>
  );
};

export default ExpensesNav;
