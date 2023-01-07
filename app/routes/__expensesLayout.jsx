import { Outlet } from '@remix-run/react';

export default function ExpensesLayout() {
  return (
    <>
      <ExpensesLayout />
      <Outlet />
    </>
  );
}
