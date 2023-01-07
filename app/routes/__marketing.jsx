import { Outlet } from '@remix-run/react';
import MarketingNav from '~/components/MarketingNav';

export default function ExpensesLayout() {
  return (
    <>
      <MarketingNav />
      <Outlet />
    </>
  );
}
