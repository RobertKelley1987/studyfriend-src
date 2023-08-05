const AuthHints = ({ email, password }) => {
    const missingData = !email || !password;
    const passwordTooSmall = password.length < 8;
    const notValid = missingData || passwordTooSmall;

    const renderMessage = () => {
        if(missingData) {
            return 'Email and password required'
        } else if(passwordTooSmall) {
            return 'Minimum password length is 8 characters'
        } else {
            return null;
        }
    }

    return notValid ? <p className="form-hint">{renderMessage()}</p> : null;
}

export default AuthHints;