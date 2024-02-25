import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import deleteImage from "../../../assets/images/delete.svg";
import editImage from "../../../assets/images/edit.svg";
import {
  editActive,
  removeTransaction,
} from "../../../redux/features/transaction/transactionSlice";

const Transaction = ({ transaction }) => {
  const { id, name, type, amount } = transaction || {};
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editActive(transaction));
  };

  const handleDelete = (id) => {
    dispatch(removeTransaction(id));
  };

  return (
    <>
      <li className={`transaction ${type}`}>
        <p>{name}</p>
        <div className="right">
          <p>৳ {amount}</p>
          <button className="link" onClick={handleEdit}>
            <img className="icon" src={editImage} alt="edit" />
          </button>
          <button className="link" onClick={() => handleDelete(id)}>
            <img className="icon" src={deleteImage} alt="delete" />
          </button>
        </div>
      </li>
    </>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.number,
  }),
};

export default Transaction;
