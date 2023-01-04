import React from 'react';
import Container from './Container';

const ExpenseCard = ({ data }) => {
  return (
    <Container className="flex items-center ">
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold">{data.title}</h1>
        <h2 className="text-xl font-semibold">$ {data.amount}</h2>
      </div>
      <div className="flex gap-5 justify-center">
        <img src="images/edit.svg" alt="edit" />
        <img src="images/trash.svg" alt="del" />
      </div>
    </Container>
  );
};

export default ExpenseCard;
