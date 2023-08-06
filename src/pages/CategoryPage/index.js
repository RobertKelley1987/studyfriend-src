import { useParams } from 'react-router-dom';
import { findCategory } from '../../utils';
import Flashcards from './Flashcards';
import CategoryPageHeader from './CategoryPageHeader';
import Loading from '../../components/ui/Loading';
import './CategoryPage.css';

// Category page displaying name and all flashcards for that category
const CategoryPage = props => {
    const { categories, setIsStudying } = props;
    const { categoryId } = useParams();
    const category = findCategory(categories, categoryId);

    // Flashcards user has marked for studying / review
    const notCompleted = category.flashcards.filter(card => !card.completed);
    // FLashcards user has marked as completed
    const completed = category.flashcards.filter(card => card.completed);

    return (
        <div className="page category-page">
            <CategoryPageHeader 
                setCategories={props.setCategories} 
                firstCard={notCompleted[0]}
                setIsStudying={setIsStudying}
                completed={completed}
            />

            <Loading isLoading={!categories} loadingEl={<div className="loading center-content">Loading...</div>}>
                <main className="category-page-main">
                    <h1 className="category-page-heading">{category.name}</h1>
                    <section className="category-page-section">
                        <h3 className="category-page-heading-small">For Review</h3>
                        <Flashcards {...props} categoryId={category._id} flashcards={notCompleted} />
                    </section>
                    <section className="category-page-section">
                        <h3 className="category-page-heading-small">Completed</h3>
                        <Flashcards {...props} categoryId={category._id} flashcards={completed} />
                    </section>
                </main>
            </Loading>
        </div>
    )
}

export default CategoryPage;