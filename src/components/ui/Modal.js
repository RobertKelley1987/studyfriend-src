import { createPortal } from 'react-dom';
import './Modal.css';

const Modal = ({ children, handleDismiss }) => {
    return createPortal(
        <div className="modal" onClick={handleDismiss}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>{children}</div>
        </div>, document.getElementById('modal'));
}

export default Modal;