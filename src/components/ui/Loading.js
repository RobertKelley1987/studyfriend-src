const Loading = ({ children, isLoading, loadingEl }) => {
    return !isLoading ? children : loadingEl;
}

export default Loading;