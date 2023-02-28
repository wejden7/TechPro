import React from "react";
import * as Component from "../";
import { InputSelectFilter } from "components/Input";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { getBranches } from "state/SettingSlice";
import { selectAllStock } from "state/StockSlice";
import DeleteButton from "./components/DeleteButton/DeleteButton";

import styles from "./ListMerchandise.module.scss";

const Item = ({ item }) => {
  return (
    <div className={styles.item}>
      <p className="truncate">{item?.label || "-"}</p>
      <p className="unit">{item?.unit || "-"}</p>
      <div className={`flex-around-center`}>
        <Component.EntreeMerchandise id={item._id} />
        <button className={`btn-operation ${styles.btnout}`}>out</button>
        <Component.DestroyMerchandise id={item._id} />
      </div>
      <div className={`flex-around-center`}>
        <Component.UpdateMerchandise item={item} />
        <DeleteButton id={item._id} />
      </div>
    </div>
  );
};
const Body = ({ brancheId }) => {
  const merchandise = useSelector(selectAllStock);
  let merchandiseFiltre = merchandise;
  if (brancheId !== "all")
    merchandiseFiltre = merchandise.filter(
      ({ branche }) => brancheId === branche
    );
  return (
    <div className={`container-body`}>
      <div className={styles.item}>
        <span>Label</span>
        <span>unite</span>
        <span className="text-center">Operation</span>
        <span className="text-center">Action</span>
      </div>
      {merchandiseFiltre.map((item, index) => (
        <Item item={item} key={index} />
      ))}
    </div>
  );
};

const ListMerchandise = () => {
  const branches = useSelector(getBranches);
  const { control, watch } = useForm({ defaultValues: { branche: "all" } });
  const watchShowBranche = watch("branche", "all");
  return (
    <div className={`container ${styles.list_Merchandise}`}>
      <div className="container-header">
        <h1 className="titel">Merchandise</h1>
        <div className="left">
          <InputSelectFilter control={control} name="branche" data={branches} />
          <Component.AddMerchandise />
        </div>
      </div>
      <Body brancheId={watchShowBranche} />
    </div>
  );
};

export default ListMerchandise;
