import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import './DeleteModal.css';

// Modal for DeleteCategory and DeleteFlashcard pages
const DeleteModal = ({ children, heading = "Are you sure?" }) => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <Modal handleDismiss={goBack}>
            <div className="delete-modal">
                <h2>{heading}</h2>
                <div className="delete-modal-buttons">
                    {children}
                    <button onClick={goBack} className="button">Cancel</button>
                </div>
            </div>
        </Modal>
    );
}

export default DeleteModal;