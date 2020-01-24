import React from "react";
import { Modal } from "react-bootstrap";

//useDispatch para cerrar el modal, y use Selector para adquirir el valor del modal
import { useDispatch, useSelector } from "react-redux";

import { openCloseAddTweetModalAction } from "../actions/modalsActions.js";

export default function ModalComponent(props) {
  const { children } = props;

  //dispatch para ejecutar nuestras acciones
  const dispatch = useDispatch();

  const closeModal = state => {
    dispatch(openCloseAddTweetModalAction(state));
  };

  //useSelector para acceder al un valor en el storage
  const isOpenModal = useSelector(state => state.modals.stateModalAddTweet);

  return (
    <Modal
      show={isOpenModal}
      size="lg"
      centered
      onHide={() => closeModal(false)}
    >
      {children}
    </Modal>
  );
}
