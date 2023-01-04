import { Form, Link } from '@remix-run/react';
import Container from '~/components/Container';
import Input from '~/components/Input';
import Modal from '~/components/Modal';

const ExpensesAdd = () => {
  return (
    <Modal>
      <Container>
        <Form className="flex flex-col gap-10">
          <Input
            type="text"
            label="Expense title"
            placeholder="E.g. Car Insurance"
          />
          <div className="flex gap-10">
            <Input type="number" label="Amount" placeholder="E.g. 900" />
            <Input type="date" label="Date" placeholder="E.g. 10/10/2022" />
          </div>
          <div className="flex gap-10 justify-end items-center">
            <Link to="..">Cancel</Link>
            <button className="bg-gray-600 hover:bg-gray-700 rounded-full px-7 py-2 font-semibold text-white">
              Save expense
            </button>
          </div>
        </Form>
      </Container>
    </Modal>
  );
};

export default ExpensesAdd;
