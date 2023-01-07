import ExpenseCard from './ExpenseCard';

const DATA = [
  {
    id: 1,
    title: 'Something title',
    amount: 12.99,
    date: new Date().toDateString(),
  },
  {
    id: 2,
    title: 'Something else',
    amount: 1120.99,
    date: new Date().toDateString(),
  },
  {
    id: 3,
    title: 'Something else',
    amount: 1120.99,
    date: new Date().toDateString(),
  },
  {
    id: 4,
    title: 'Something else',
    amount: 1120.99,
    date: new Date().toDateString(),
  },
];

const ExpensesList = () => {
  return (
    <div className="flex gap-5 flex-wrap">
      {DATA.map((item) => (
        <ExpenseCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default ExpensesList;
