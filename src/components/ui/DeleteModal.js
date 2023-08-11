import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import Loading from './Loading';
import './DeleteModal.css';

// Modal for DeleteCategory and DeleteFlashcard pages
const DeleteModal = ({ deleteButton, name, isLoading, isUpdating }) => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    const renderText = () => name ? `Delete ${name}?` : "Are you sure?"; 

    return (
        <Modal handleDismiss={goBack}>
            <div className="delete-modal">
                <Loading isLoading={isUpdating} loadingEl="Deleting...">
                    <Loading isLoading={isLoading} loadingEl="Loading...">
                        <h2>{renderText()}</h2>
                    </Loading>

                    <div className="delete-modal-buttons">
                        {deleteButton}
                        <button onClick={goBack} className="button">Cancel</button>
                    </div>
                </Loading>
            </div>
        </Modal>
    );
}

export default DeleteModal;