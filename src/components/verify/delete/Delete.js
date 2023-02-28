import useModel from "Hooks/useModel";
import ModalComponent from "components/Modal/Modal";
import React from "react";

import styles from "./Delete.module.scss";

const Delete = ({ children, delete: fn }) => {
  const { openModal, handleOpenModal, handleCloseModal } = useModel();
  const onDelete = () => {
    handleCloseModal();
    fn();
  };
  return (
    <>
      {React.cloneElement(children, { onClick: handleOpenModal })}
      <ModalComponent openModal={openModal} handleCloseModal={handleCloseModal}>
        <div className={`model-team `}>
          <div className="model-team-header">
            <h1 className="model-team-header-title">Delete</h1>
            <button onClick={handleCloseModal}></button>
          </div>
          <div className={`${styles.content}`}>
            <h1>Are you sure you want to delete</h1>
            <div className={`${styles.btns}`}>
              <button
                className={`${styles.btn} ${styles.btn_cancel}`}
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className={`${styles.btn} ${styles.btn_ok}`}
                onClick={onDelete}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </ModalComponent>
    </>
  );
};

export default Delete;
