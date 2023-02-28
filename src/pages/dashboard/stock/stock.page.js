import React from "react";
import "./stock.style.scss";
import PuffLoader from "react-spinners/PuffLoader";
import {
  fetchMerchandise,
  getStockStatus,
  getStockError,
} from "state/StockSlice";
import { useDispatch, useSelector } from "react-redux";
import { img401 } from "utils/assets/images";
import { ListMerchandise, Demond } from "components/Stock";
const Stock = () => {
  const dispatch = useDispatch();
  const status = useSelector(getStockStatus);
  const error = useSelector(getStockError);

  React.useEffect(() => {
    dispatch(fetchMerchandise());
  }, []);

  var content;
  switch (status) {
    case "loading":
      content = <PuffLoader color="#618685" size={100} />;
      break;
    case "succeeded":
      content = (
        <div className="succeeded">
          <ListMerchandise />
          <Demond />
        </div>
      );
      break;
    case "failed":
      content = (
        <div className="error">
          <img src={img401} alt="" />
          <p>{error}</p>
        </div>
      );
      break;
  }
  return (
    <div className="content-dashboard content-dashboard-stock">{content}</div>
  );
};

export default Stock;
