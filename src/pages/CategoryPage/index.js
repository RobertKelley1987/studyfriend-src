import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Flashcards from './Flashcards';
import CategoryPageHeader from './CategoryPageHeader';
import Loading from '../../components/ui/Loading';
import ErrorMessage from '../../components/ui/ErrorMessage';
import './CategoryPage.css';

// Category page displaying name and all flashcards for that category
const CategoryPage = props => {
    const { setCategoryId, flashcards, setFlashcards, name, loadingFlashcards, loadingCategory } = props;
    const [errorMessage, setErrorMessage] = useState('');
    const { categoryId } = useParams();

    // If category id in url changes, update in app state
    useEffect(() => {
        setCategoryId(categoryId);
    }, [categoryId, setCategoryId])

    return (
        <Loading 
            isLoading={loadingCategory || loadingFlashcards} 
            loadingEl={<div className="loading center-content">Loading...</div>}
        >
            <div className="page category-page">
                <CategoryPageHeader 
                    {...props}
                    setFlashcards={setFlashcards}
                    firstCard={flashcards.notCompleted[0] || {}}
                    completed={flashcards.completed}
                />
                <ErrorMessage message={errorMessage} setErrorMessage={setErrorMessage}/>

                <main className="category-page-main">
                    <h1 className="category-page-heading">{name}</h1>
                    <section className="category-page-section">
                        <h3 className="category-page-heading-small">For Review</h3>
                        <Flashcards 
                            {...props} 
                            setErrorMessage={setErrorMessage}
                            setFlashcards={setFlashcards}
                            flashcards={flashcards.notCompleted} 
                        />
                    </section>
                    <section className="category-page-section">
                        <h3 className="category-page-heading-small">Completed</h3>
                        <Flashcards 
                            {...props} 
                            setErrorMessage={setErrorMessage}
                            setFlashcards={setFlashcards}
                            flashcards={flashcards.completed} 
                        />
                    </section>
                </main>
            </div>
        </Loading>    
    )
}

export default CategoryPage;