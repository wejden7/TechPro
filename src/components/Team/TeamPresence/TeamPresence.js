import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { PresenceItem, MapItem, Input } from "components";
import { UseGetPresence } from "utils/apis/presence.api";
import { useSelector } from "react-redux";
import { selectAllTeam } from "state/TeamSlice";
import moment from "moment-timezone";
import PuffLoader from "react-spinners/PuffLoader";
import { socket } from "utils/service/socket";
import { status } from "utils/Data/Data";
import "./TeamPresence.style.scss";
import UseAutorization from "components/Protected/withAutorization";
const option = (Month) => ({
  defaultValues: { team: "all", mois: Month },
});

const TeamPresence = () => {
  const { InputSelectFilter, InputSelectMois } = Input;
  const Month = moment().startOf("month").format("YYYY-MM-DD");
  const teams = useSelector(selectAllTeam);
  const { control, watch } = useForm(option(Month));
  const watchShowTeam = watch("team", "all");
  const watchShowMois = watch("mois", Month);
  const { data, isSuccess, refetch } = UseGetPresence(watchShowTeam);
  useEffect(() => {
    socket.on("RELODE-PRESECE", (room) => {
      console.log("relode client");
      refetch();
    });
  }, []);

  const render = !isSuccess ? (
    <div className="center">
      <PuffLoader color="#618685" size={100} />
    </div>
  ) : (
    <>
      <div className="guide-color">
        {status.map((item) => (
          <div key={item.value} className={`guide-color-item ${item.value}`}>
            {item.label}
          </div>
        ))}
      </div>
      <MapItem items={data} date={watchShowMois}>
        <PresenceItem />
      </MapItem>
    </>
  );
  return (
    <div className="container presence-team">
      <div className="container-header ">
        <h1 className="titel">Presence</h1>
        <div className="left">
          <InputSelectFilter control={control} name="team" data={teams} />
          <InputSelectMois control={control} name="mois" />
        </div>
      </div>

      <div className=" container-body ">{render}</div>
    </div>
  );
};

export default TeamPresence;
