import { useSelector } from "react-redux";
import numberWithCommas from "../../utils/numberWithCommas";
const Balance = () => {
  const { transactions } = useSelector((state) => state.transaction);

  const calculateIncome = (transactions) => {
    let income = 0;
    transactions.forEach((transaction) => {
      const { amount, type } = transaction;

      if (type === "income") {
        income += amount;
      }

      if (type === "expense") {
        income -= amount;
      }
    });
    return numberWithCommas(income);
  };

  

  return (
    <div className="top_card">
      <p>Your Current Balance</p>
      <h3>
        <span>৳</span>
        <span>
          {transactions.length > 0 ? (
            <span> {calculateIncome(transactions)} </span>
          ) : (
            <span> 0 </span>
          )}
        </span>
      </h3>
    </div>
  );
};

export default Balance;
