import Balance from "./components/expense/Balance";
import Form from "./components/expense/Form";
import Transactions from "./components/expense/Transactions/Transactions";

const Page = () => {
  return (
    <div className="container">
      <Balance />
      <Form />
      <Transactions />
    </div>
  );
};

export default Page;
