import { Modal } from "react-bootstrap"

const CustomModal = ({
    modalShow,
    modalSize,
    modalClassname,
    modalDialogClassName,
    modalClickOutsideHide,
    modalFullscreen,
    modalCentered,
  
    showModalHeader,
    modalHeaderTitleClassname,
    modalHeaderClassname,
    modalHeader,
  
    modalBodyClassname,
    modalBody,
  
    showModalFooter,
    modalFooterClassname,
    modalFooter,
  
    onHide
  }) => {
  
    return (
  
      <Modal
        show={modalShow}
        size={modalSize}
        backdrop={modalClickOutsideHide ? "" : "static"}
        fullscreen={modalFullscreen}
        centered={modalCentered}
        contentClassName={modalClassname}
        dialogClassName={modalDialogClassName}
        onHide={onHide}
      >
  
        {/* Header */}
        {
          showModalHeader ? <Modal.Header closeButton className={modalHeaderClassname}>
            <Modal.Title className={modalHeaderTitleClassname}>
              {modalHeader}
            </Modal.Title>
          </Modal.Header>
            :
            null
        }
  
  
  
        {/* Body */}
        <Modal.Body className={modalBodyClassname}>
          {modalBody}
        </Modal.Body>
  
  
        {/* Footer */}
        {
          showModalFooter ? <Modal.Footer className={modalFooterClassname}>
            {modalFooter}
          </Modal.Footer>
            :
            null
        }
  
  
      </Modal>
    )
  }
  
  export default CustomModal