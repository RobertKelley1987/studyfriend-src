import './Grid.css';

// Grid component used to show all categories on CategoriesPage and all flashcards
// on CategoryPage
const Grid = ({ children }) => {
    return <div className="grid">{children}</div>;
}

export default Grid;