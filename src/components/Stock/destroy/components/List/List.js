import React from "react";
import moment from "moment-timezone";
import * as Slice from "state/DestroyStockSlice";
import { useSelector, useDispatch } from "react-redux";
import { UseStateContextData } from "context/contextProvideData";
import style from "./List.module.scss";
import { TableList } from "components/Table";
import Accordion, { Summary, Detail } from "components/Accordion";

const column = [
  { label: "count", value: "count" },
  { label: "Coment", value: "comment" },
  { label: "Time", value: "created_at", type: "Date" },
];
const List = ({ id }) => {
  const dispatch = useDispatch();
  const { select } = UseStateContextData();
  const data = useSelector((state) =>
    Slice.selectAllDestroyStockByMerchandise(state, id)
  );

  const onDelete = async (data) => {
    await dispatch(Slice.deleteDestroyMerchandise(data)).unwrap();
  };
  return data.map(({ _id, month, destroy }, index) => (
    <div className={style.list} key={index}>
      {" "}
      <Accordion>
        <Summary>{moment(month).format("MMMM YYYY")}</Summary>
        <Detail>
          <TableList
            id={_id}
            data={destroy}
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
