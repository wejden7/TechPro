import React from "react";
import moment from "moment-timezone";

import { TableList } from "components/Table";
import Accordion, { Summary, Detail } from "components/Accordion";

import * as Slice from "state/entreeStockSlice";
import { useSelector, useDispatch } from "react-redux";
import { UseStateContextData } from "context/contextProvideData";

import style from "./List.module.scss";

const column = [
  { label: "count", value: "count" },
  { label: "Price of Unit", value: "priceUnit" },
  { label: "Price Totale", value: "priceTotale" },
  { label: "Time", value: "created_at", type: "Date" },
];

const List = ({ id }) => {
  const dispatch = useDispatch();
  const { select } = UseStateContextData();
  const data = useSelector((state) =>
    Slice.selectAllEntreeStockByMerchandise(state, id)
  );

  const onDelete = async (data) => {
    const { id, itemId } = data;
    await dispatch(
      Slice.deleteEntreeMerchandise({ id, enntreId: itemId })
    ).unwrap();
  };

  return data.map(({ _id, month, entree }, index) => (
    <div className={style.list} key={index}>
      <Accordion>
        <Summary> {moment(month).format("MMMM YYYY")}</Summary>
        <Detail>
          <TableList
            id={_id}
            data={entree}
            column={column}
            onDelete={onDelete}
            select={(data) => select(data.item, data.id)}
          />
        </Detail>
      </Accordion>
    </div>
  ));
};

export default List;
