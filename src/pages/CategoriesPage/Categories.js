import Grid from '../../components/layout/Grid';
import Category from './Category';

const Categories = ({ categories }) => {
    const emptyMessage = (
        <p className="categories-empty-message">
            You don't have any categories! Create a new category to start making flashcards.
        </p>
    );

    const categoriesGrid = <Grid>{categories.map(cat => <Category key={cat._id} category={cat} />)}</Grid>;

    return categories.length === 0 ? emptyMessage : categoriesGrid;
}

export default Categories;