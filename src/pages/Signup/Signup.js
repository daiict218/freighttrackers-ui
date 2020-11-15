import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {signup} from '../../firebase/auth';

import './signup.scss';

function Signup(props) {
    console.log(props);
    const { register, handleSubmit, reset } = useForm();
    const [isLoading, setLoading] = useState();

    const onSubmit = async (data) => {
        let newUser;
        setLoading(true);
        try {
            newUser = await signup(data);
            reset();
        } catch (error) {
            console.log(error);
        }
        
        if(newUser){
            props.history.push(`/profile/${newUser.uid}`);
        } else {
            setLoading(false);
        }
    }

    const formClassName = `ui form ${isLoading ? 'loading' : ''}`
  return (
    <div className="login-container">
    <div className="ui card login-card">
        <div className="content">
        <form className={formClassName} onSubmit={handleSubmit(onSubmit)}>
            <div className="two fields">
            <div className="field">
                <label>
                First Name
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    ref={register}
                />
                </label>
            </div>
            <div className="field">
                <label>
                Last Name
                <input type="text" name="lastName" placeholder="Last Name"  ref={register} className="text" />
                </label>
            </div>
            </div>
            <div className="field">
            <label>
                Email
                <input type="email" name="email" placeholder="Email"  ref={register} />
            </label>
            </div>
            <div className="field">
            <label>
                Password
                <input type="password" name="password" placeholder="Password" ref={register} className="password" />
            </label>
            </div>
            <button className="ui primary button login" type="submit">
            Sign Up
            </button>
        </form>
        </div>
    </div>
    </div>
  );
}

export default Signup;
