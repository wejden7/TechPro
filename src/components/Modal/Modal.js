import Modal from "@mui/material/Modal";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { UseStateDashboardContext } from "context/contextDaschboard";
import "./Modal.style.scss";
function ModalComponent({ children, openModal, handleCloseModal }) {
  const { mode } = UseStateDashboardContext();
  return (
    <AnimatePresence>
      {openModal && (
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <motion.div
            initial={{ x: "-50%", y: "-50%", opacity: 0, scale: 0.9 }}
            animate={{x: "-50%", y: "-50%", opacity: 1, scale: 1 }}
            exit={{x: "-50%", y: "-50%", opacity: 0, scale: 0.9 }}
            transition={{
              duration: 0.5,
            }}
            className={`modal ${mode}`}
          >
            {children}
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
}

export default ModalComponent;
