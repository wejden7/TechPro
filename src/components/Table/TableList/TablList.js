import React, { useEffect } from "react";
import style from "./TableList.module.scss";
import moment from "moment-timezone";

import { Delete } from "components";

const TableHeader = ({ props, count }) => {
  const { column, onDelete, select } = props;

  return (
    <div className={style.item} style={{ "--count": count }}>
      {column.map(({ label }, index) => (
        <span key={index}> {label}</span>
      ))}
      {(select || onDelete) && <span> Action</span>}
    </div>
  );
};

const TableRow = ({ props, count, item }) => {
  const { id, column, onDelete, select } = props;

  return (
    <div className={style.item} style={{ "--count": count }}>
      {column.map(({ value, type }, index) => (
        <span key={index}>
          {type === "Date"
            ? moment(item[value]).format("D MMMM HH:mm")
            : item[value]}
        </span>
      ))}
      <span className={style.action}>
        {select && <button onClick={() => select({ item, id })}>Update</button>}
        {onDelete && (
          <Delete delete={() => onDelete({ id: id, itemId: item._id })}>
            <button>Delete</button>
          </Delete>
        )}
      </span>
    </div>
  );
};

const TableList = (props) => {
  const { column, data, onDelete, select } = props;
  const [count, setCount] = React.useState(column.length);

  useEffect(() => {
    let count = column.length;
    if (onDelete||select) count++;
    setCount(count);
  }, []);

  return (
    <div className={`${style.items}`}>
      <TableHeader props={props} count={count} />
      {data.map((item, index) => (
        <TableRow key={index} item={item} props={props} count={count} />
      ))}
    </div>
  );
};
export default TableList;
