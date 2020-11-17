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
                if(!!user.uid){ //Need to make sure that the logic is correct here
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