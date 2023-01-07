import { Outlet, Link } from '@remix-run/react';
import ExpensesList from '~/components/ExpensesList';

const ExpensesLayout = () => {
  return (
    <>
      <Outlet />
      <main className="p-10 flex flex-col gap-5">
        <div className="flex justify-center w-full gap-10">
          <Link
            to="add"
            className="bg-gray-300 hover:bg-gray-400 rounded-full px-7 py-2 font-semibold  flex gap-2 items-center"
          >
            <img src="/images/add.svg" alt="add" className="w-6 stroke-white" />
            Add Expense
          </Link>
          <a
            href="/expenses/raw"
            className="bg-gray-300 hover:bg-gray-400 rounded-full px-7 py-2 font-semibold  flex gap-2 items-center"
          >
            <img
              src="/images/download.svg"
              alt="raw"
              className="w-6 stroke-white"
            />
            Load raw data
          </a>
        </div>
        <ExpensesList />
      </main>
    </>
  );
};

export default ExpensesLayout;
