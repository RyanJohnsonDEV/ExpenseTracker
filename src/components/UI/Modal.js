import "./Modal.css";

function Modal(props) {
  let isHidden = "hidden";

  function showModal() {
    isHidden = "";
  }

  function hideModal() {
    props.reset();
    isHidden = "hidden";
  }

  if (props.message !== "") {
    showModal();
  }

  return (
    <>
      <div className={`backdrop ${isHidden}`} onClick={hideModal}></div>
      <div className={`modal-window ${isHidden}`}>
        <div className="modal-title">{props.title}</div>
        <div className="modal-message">{props.message}</div>
        <div className="modal-actions">
          <button onClick={hideModal} type="button">
            Okay
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;
