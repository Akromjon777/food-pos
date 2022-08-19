import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import "./modal.css";
const Modal = ({ modal, setModal, children }) => {
  const elOverlay = useRef();

  const closeModal = (evt) => {
    if (evt.target === elOverlay.current) {
      setModal(false);
    }
  };

  useEffect(() => {
    function handleCloseModal(evt) {
      console.log(evt);
      if (evt.code === "Escape") {
        setModal(false);
      }
    }
    if (modal) {
      window.addEventListener("keyup", handleCloseModal);
    }
    return () => window.removeEventListener("keyup", handleCloseModal);
  }, [modal]);

  return (
    <div className="container">
      <div
        ref={elOverlay}
        onClick={closeModal}
        className={`overlay w-100 h-100 position-fixed top-0 start-0  d-flex justify-content-center align-items-center border border-2 shadow ${
          !modal && "d-none"
        }`}
      >
        <div className="modal-main w-50 h-50 bg-white shadow p-4">
          <div className="modal-header">
            <h1>Add post</h1>
            <button
              onClick={() => setModal(false)}
              className="modal-close btn btn-primary"
            >
              X
            </button>
          </div>
          <div className="modal-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
