import React from "react";
import Delete from "components/verify/delete/Delete";
import MoonLoader from "react-spinners/MoonLoader";
import { useDispatch } from "react-redux";
import { deleteMerchandise } from "state/StockSlice";
import styles from "./DeleteButton.module.scss";

const DeleteButton = ({ id }) => {
  const [isLoding, setIsLoding] = React.useState(false);
  const dispatch = useDispatch();
  const onClick = async () => {
    setIsLoding(true);
    dispatch(deleteMerchandise(id)).then(() => setIsLoding(false));
  };
  return (
    <Delete delete={onClick}>
      <button
        className={`btn-action ${styles.btn_delete} ${
          !isLoding && styles.not_hidden
        }`}
      >
        <MoonLoader color="#fefbd8" size={20} loading={isLoding} />
      </button>
    </Delete>
  );
};
export default DeleteButton;
