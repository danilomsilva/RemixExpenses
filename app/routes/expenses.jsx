import { Outlet } from '@remix-run/react';

const ExpensesLayout = () => {
  return (
    <main>
      <div>Shared layout</div>
      <Outlet />
    </main>
  );
};

export default ExpensesLayout;
