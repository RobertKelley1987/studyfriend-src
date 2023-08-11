import Grid from '../../components/layout/Grid';
import Category from './Category';

// Grid of categories displayed on categories page
const Categories = ({ categories }) => {
    const emptyMessage = (
        <p className="categories-empty-message">
            You don't have any categories! Create a new category to start making flashcards.
        </p>
    );

    const categoriesGrid = (
        <Grid>
            {categories.map(category => <Category key={category._id} category={category} />)}
        </Grid>
    );

    return categories.length === 0 ? emptyMessage : categoriesGrid;
}

export default Categories;