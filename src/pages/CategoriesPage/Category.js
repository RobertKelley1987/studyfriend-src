import { Link } from 'react-router-dom';
import Dropdown from '../../components/ui/Dropdown';
import CategoryOptions from '../../components/category/CategoryOptions';
import './Category.css';

// Category card displayed inside grid of categories on categories page
const Category = ({ category }) => {
    // Flashcards user wants to review
    const cardsToReview = category.flashcards.filter(flashcard => !flashcard.completed);
    // Flashcards marked as completed
    const completedCards = category.flashcards.filter(flashcard => flashcard.completed);

    return (
        <Link className="category" to={`/categories/${category._id}`}>
            <div className="category-wrapper">
                <h2 className="category-name">{category.name}</h2>
                <div className="category-data">
                    <span>Total Cards: {category.flashcards.length}</span>
                    <span>Cards To Review: {cardsToReview.length}</span>
                    <span>Completed Cards: {completedCards.length}</span>
                </div>
            </div>
            <div className="category-buttons">
                <Dropdown>
                    <CategoryOptions categoryId={category._id} className="link"/>
                </Dropdown>
            </div>
        </Link>
    )
}

export default Category;