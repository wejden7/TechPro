import React, { useState } from "react";
import { Branche } from "components";
import Tooltip from "@mui/material/Tooltip";
import { useSelector, useDispatch } from "react-redux";
import {
  getBranches,
  deleteBranche,
  openCloseZoneBranche,
  openClosePointBranche,
} from "state/SettingSlice";

import "./ListeBranche.style.scss";

const Header = ({ label, onUpdate, id }) => {
  const dispatch = useDispatch();
  const onDeleteBranche = (id) => {
    dispatch(deleteBranche(id))
      .unwrap()
      .then((e) => console.log(e))
      .catch((e) => console.log(e));
  };
  return (
    <div className="header">
      <h1 className="titel">{label}</h1>
      <div className="flex gap-2">
        <button
          onClick={() => onDeleteBranche(id)}
          className="btn-item-branche delete"
        >
          Delete
        </button>
        <button
          onClick={() => onUpdate(id)}
          className="btn-item-branche update"
        >
          {" "}
          Update
        </button>
      </div>
    </div>
  );
};
const Item = ({ item, onclick }) => {
  const { label, ferme, _id } = item;
  return (
    <Tooltip title={` ${ferme ? "ouvrir" : "ferme"}`}>
      <button
        onClick={() => onclick(_id)}
        className={`btn-ul ${ferme && "ferme"}`}
      >
        {label}
      </button>
    </Tooltip>
  );
};
const ListeBranche = () => {
  const dispatch = useDispatch();
  const branches = useSelector(getBranches);
  const [idApdate, setIdUpdate] = useState();

  const onAnnuler = () => {
    setIdUpdate(null);
  };
  const onUpdate = (id) => {
    setIdUpdate(id);
  };

  const onOpenCloseZone = async (id) => {
    await dispatch(openCloseZoneBranche(id))
      .unwrap()
      .then((e) => console.log(e))
      .catch((e) => console.log(e));
  };
  const onOpenClosePoint = async (id) => {
    await dispatch(openClosePointBranche(id))
      .unwrap()
      .then((e) => console.log(e))
      .catch((e) => console.log(e));
  };

  //add context select data umodify update and delete update existe 
  return (
    <div className="liste-branche">
      {branches.map(({ label, zones, pointPreparation, _id }, index) => (
        <div key={index} className="grid gap-2">
          <div key={index} className="item-branche">
            <Header label={label} id={_id} onUpdate={onUpdate} />
            <div className="zone_point">
              <div className="zone">
                {" "}
                {zones.map((item, index) => (
                  <Item key={index} item={item} onclick={onOpenCloseZone} />
                ))}
              </div>
              
              <div className="zone">
                {pointPreparation.map((item, index) => (
                  <Item key={index} item={item} onclick={onOpenClosePoint} />
                ))}
              </div>
            </div>
          </div>
          
        </div>
      ))}
      <div className="update">
      { idApdate && (
            <Branche.UpdateBranche id={idApdate} annuler={onAnnuler} />
          )}</div>
    </div>
  );
};

export default ListeBranche;
