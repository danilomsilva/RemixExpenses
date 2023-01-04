import { Outlet } from '@remix-run/react';
import ExpensesList from '~/components/ExpensesList';

const ExpensesLayout = () => {
  return (
    <main>
      <Outlet />
      <ExpensesList />
    </main>
  );
};

export default ExpensesLayout;
