import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../Form/FormInput";
import useFormTeam from "Hooks/UseFormTeam";
import ModelForm from "../../Modal/FormModel";
import { deleteEmployer } from "state/TeamSlice";
import BarLoader from "react-spinners/BarLoader";
import { UseRefrecherCodeApi } from "utils/apis/team.api";

import "./UpdateTeam.style.scss";

const RefetcheCodeLogin = ({ id }) => {
  const { isFetching, refetch, data } = UseRefrecherCodeApi(id);
  return (
    <button onClick={refetch} type="button" className={`code-login center`}>
      <BarLoader className="grid" color="#8288c3" loading={isFetching} />
      {!isFetching && (
        <>
          <span className="span-text">Refreche code login click hir :</span>
          <span className="span-text-code">{data}</span>
        </>
      )}
    </button>
  );
};

const DeleteTeam = ({ id }) => {
  const dispatch = useDispatch();
  const [isdelete, setIsDelete] = useState(false);
  const onDelete = async () => {
    setIsDelete(true);
    await dispatch(deleteEmployer(id)).then(() => {
      setIsDelete(false);
    });
  };
  return (
    <button onClick={onDelete} type="button" className="btn btn-delete center">
      {!isdelete ? "Delete" : <BarLoader color="#fefbd8" />}
    </button>
  );
};

const Form = ({ dataTeam }) => {
  const { onSubmit, isSubmitting, error, ...other } = useFormTeam(
    dataTeam,
    true
  );
  return (
    <form onSubmit={onSubmit} className="form">
      <p className="text-error ">{error?.message}</p>
      <FormInput useForm={other} />
      <div className="grid-column-3">
        <RefetcheCodeLogin id={dataTeam._id} />
        <button type="submit" className="btn btn-save">
          {!isSubmitting ? "Update" : <BarLoader color="#fefbd8" />}
        </button>
        <DeleteTeam id={dataTeam._id} />
      </div>
    </form>
  );
};

function UpdateTeam({ dataTeam }) {
  return (
    <ModelForm titel="Update" btnContent="update" btnClass="btn-update-team">
      <Form dataTeam={dataTeam} />
    </ModelForm>
  );
}

export default UpdateTeam;
