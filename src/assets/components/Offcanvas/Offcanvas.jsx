import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const OffCanvas = ({
    offcanvasClassname,
    offcanvasPlacement,
    canvasHeader,
    canvasBody,
    offCanvasShow,
    handleCanvasOpenOrClose,
}) => {
    return (
        <Offcanvas
            show={offCanvasShow}
            onHide={handleCanvasOpenOrClose}
            backdrop="static"
            className={offcanvasClassname}
            placement={offcanvasPlacement}
        >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>{canvasHeader}</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>{canvasBody}</Offcanvas.Body>
        </Offcanvas>
    );
};

export default OffCanvas;
