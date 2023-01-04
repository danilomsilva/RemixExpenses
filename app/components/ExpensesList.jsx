import React from 'react';
import ExpenseCard from './ExpenseCard';

const DATA = [
  {
    id: 123,
    title: 'Something is',
    amount: 12.99,
    date: new Date().toDateString(),
  },
];

const ExpensesList = () => {
  return DATA.map((item) => <ExpenseCard key={item.id} data={item} />);
};

export default ExpensesList;
