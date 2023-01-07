import Container from './Container';

const ExpenseCard = ({ data }) => {
  return (
    <Container>
      <div className="flex gap-5">
        <div className="flex flex-col w-60">
          <h1 className="text-2xl font-semibold ">{data.title}</h1>
          <h2 className="text-xl font-semibold ">$ {data.amount}</h2>
        </div>
        <div className="flex gap-5">
          <img src="/images/edit.svg" alt="edit" className="w-6" />
          <img src="/images/trash.svg" alt="del" className="w-6" />
        </div>
      </div>
    </Container>
  );
};

export default ExpenseCard;
