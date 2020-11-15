import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSession} from '../firebase/UserProvider';

const PrivateRoute = ({component: Component, ...rest}) => {
    const {user} = useSession();

    return (
        <Route 
            {...rest}
            render={(props) => {
                const id = props.match.params.id;
                console.log(props)
                if(!!user && user.uid === id){
                    return (
                        <Component {...rest} />
                    )
                } else {
                    return (
                        <Redirect to="/login" />
                    );
                }
            }}
        />
    )
}

export default PrivateRoute;