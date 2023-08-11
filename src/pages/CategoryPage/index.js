import { useState } from 'react';
import useCategoryId from '../../hooks/useCategoryId';
import Flashcards from './Flashcards';
import CategoryPageHeader from './CategoryPageHeader';
import Loading from '../../components/ui/Loading';
import ErrorMessage from '../../components/ui/ErrorMessage';
import './CategoryPage.css';

// Category page displaying name and all flashcards for that category
const CategoryPage = props => {
    const { setCategoryId, flashcards, setFlashcards, name, loadingFlashcards, loadingCategory } = props;
    const [errorMessage, setErrorMessage] = useState('');
    const [updatingStatus, setUpdatingStatus] = useState(false);
    useCategoryId(setCategoryId);

    return (
        <div className="page category-page">
            <CategoryPageHeader 
                {...props}
                setFlashcards={setFlashcards}
                firstCard={flashcards.notCompleted[0] || null}
                completed={flashcards.completed}
                setErrorMessage={setErrorMessage}
                updatingStatus={updatingStatus}
                setUpdatingStatus={setUpdatingStatus}
            />
            <ErrorMessage message={errorMessage} setErrorMessage={setErrorMessage}/>

            <Loading 
                isLoading={loadingCategory || loadingFlashcards} 
                loadingEl={<div className="center-content">Loading...</div>}
            >
                <main className="category-page-main">
                    <h1 className="category-page-heading">{name}</h1>
                    <section className="category-page-section">
                        <h3 className="category-page-heading-small">For Review</h3>
                        <Flashcards 
                            {...props} 
                            setErrorMessage={setErrorMessage}
                            setFlashcards={setFlashcards}
                            flashcards={flashcards.notCompleted}
                            updatingStatus={updatingStatus}
                            setUpdatingStatus={setUpdatingStatus} 
                        />
                    </section>
                    <section className="category-page-section">
                        <h3 className="category-page-heading-small">Completed</h3>
                        <Flashcards 
                            {...props} 
                            setErrorMessage={setErrorMessage}
                            setFlashcards={setFlashcards}
                            flashcards={flashcards.completed}
                            updatingStatus={updatingStatus}
                            setUpdatingStatus={setUpdatingStatus} 
                        />
                    </section>
                </main>
            </Loading>    
        </div>
    )
}

export default CategoryPage;