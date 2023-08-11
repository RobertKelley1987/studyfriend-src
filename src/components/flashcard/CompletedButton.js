// Button used to mark a flashcard as completed in database
const CompletedButton = props => {
    const { className, flashcard, handleClick, updatingStatus } = props;

    const renderText = () => !flashcard.completed ? "Mark As Completed" : "Mark For Review";

    // Add disabled class while status is being fetched from db
    const classNames = updatingStatus ? `${className} link-disabled` : className

    return <button className={classNames} onClick={handleClick}>{renderText()}</button>;

}

export default CompletedButton;