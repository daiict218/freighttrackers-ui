import React from 'react';
import { logout } from '../../firebase/auth';
import {useHistory} from 'react-router-dom';
import { useSession } from '../../firebase/UserProvider';

const Header = () => {
    const history = useHistory();
    const { user } = useSession();
    const onUserLogout = async () => {
        await logout();
        history.push('/login');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light header">
            <a className="navbar-brand" href="#">Freight-Trackers</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {!!user && (
                <button className="btn btn-outline-primary my-2 my-sm-0" type="submit" onClick={onUserLogout}>Log Out</button>
            )}
        </nav>
    )
}

export default Header;