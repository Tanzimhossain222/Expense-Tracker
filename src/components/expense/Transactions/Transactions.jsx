import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../../../redux/features/transaction/transactionSlice";
import Transaction from "./Transaction";

const Transactions = () => {
  const { transactions, isError, isLoading } = useSelector(
    (state) => state.transaction
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  //decide what to show based on the state
  let content = null;

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (!isLoading && isError) {
    content = <p className="error">There was an error occured </p>;
  }

  if (!isLoading && !isError && transactions?.length === 0) {
    content = <p className="no_transaction">No transactions yet</p>;
  }

  if (!isLoading && !isError && transactions?.length > 0) {
    content = transactions.map((transaction) => {
      return <Transaction key={transaction.id} transaction={transaction} />;
    });
  }

  return (
    <>
      <p className="second_heading">Your Transactions:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>{content}</ul>
      </div>
    </>
  );
};

export default Transactions;
