import Flashcards from './Flashcards';
import CategoryPageHeader from './CategoryPageHeader';
import Loading from '../../components/ui/Loading';
import './CategoryPage.css';

// Category page displaying name and all flashcards for that category
const CategoryPage = props => {
    const { category } = props;
    const { name, flashcards } = category;

    return (
        <Loading isLoading={!name} loadingEl={<div className="loading center-content">Loading...</div>}>
            <div className="page category-page">
                <CategoryPageHeader 
                    {...props}
                    firstCard={flashcards.notCompleted[0] || {}}
                    completed={flashcards.completed}
                />

                <main className="category-page-main">
                    <h1 className="category-page-heading">{name}</h1>
                    <section className="category-page-section">
                        <h3 className="category-page-heading-small">For Review</h3>
                        <Flashcards {...props} categoryId={category._id} flashcards={flashcards.notCompleted} />
                    </section>
                    <section className="category-page-section">
                        <h3 className="category-page-heading-small">Completed</h3>
                        <Flashcards {...props} categoryId={category._id} flashcards={flashcards.completed} />
                    </section>
                </main>
            </div>
        </Loading>
    )
}

export default CategoryPage;