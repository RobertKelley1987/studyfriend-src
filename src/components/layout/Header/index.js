import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import UserLinks from './UserLinks';
import Loading from '../../ui/Loading';
import './Header.css';

// Header for the website containing logo and auth links
const Header = props => {
    const { setIsStudying, gettingSessionData } = props;

    return (
        <Fragment>
            <header className="header">
                <Link to="/" onClick={() => setIsStudying(false)}>
                    <span className="app-logo">studyfriend</span>
                </Link>

                <Loading isLoading={gettingSessionData} loadingEl={''}>
                    <UserLinks {...props} />
                </Loading>
            </header>
        </Fragment>
    )
}

export default Header;