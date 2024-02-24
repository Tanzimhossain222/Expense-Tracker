import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTransaction } from "../../redux/features/transaction/transactionSlice";

const Form = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const { isLoading, isError, error, transactions } = useSelector(
    (state) => state.transaction
  );
  const dispatch = useDispatch();

  const handleCreate = (e) => {
    e.preventDefault();
    if (!name || !type || !amount) {
      alert("Please fill all the fields");
      return;
    }
    const data = {
      name,
      type,
      amount: Number(amount),
    };

    dispatch(createTransaction(data));
  };

  return (
    <div className="form">
      <h3>Add new transaction</h3>
      <form onSubmit={handleCreate}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Title"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group radio">
          <label htmlFor="type">Type</label>
          <div className="radio_group">
            <input
              type="radio"
              value="income"
              name="type"
              checked={type === "income"}
              onChange={() => setType("income")}
            />
            <label htmlFor="type">Income</label>
          </div>
          <div className="radio_group">
            <input
              type="radio"
              value="expense"
              name="type"
              placeholder="Expense"
              checked={type === "expense"}
              onChange={() => setType("expense")}
            />
            <label htmlFor="type">Expense</label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            placeholder="300"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <button className="btn" type="submit"
        disabled={isLoading}>
          Add Transaction
        </button>

        <button className="btn cancel_edit">Cancel Edit</button>
        <p>
          {!isLoading && isError && (
            <p className="error">
              There was an error while creating the transaction: {error}
            </p>
          )}
        </p>
      </form>
    </div>
  );
};

export default Form;
