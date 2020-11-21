import React from 'react';
import { useForm } from "react-hook-form";
import { addParty } from '../../firebase/parties';
import {createParty} from '../../store/actions/partyActions';
import {connect} from 'react-redux';

import "./addParty.scss";

const AddParty = (props) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        props.createParty(data);
        // await addParty(data);
    };

    return (
        <div className="add-parties-wrapper py-5">
            <h2>Enter Party Details</h2>
            <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
                <div className="field">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        ref={register}
                        placeholder="Enter Name"
                        label="Name"
                    />
                 </div>
                 <div className="field">
                    <label>Address</label>
                    <textarea 
                        rows="2" 
                        ref={register}
                        placeholder="Enter Address" 
                        name="address"
                    >
                    </textarea>
                </div>
                <div className="field">
                    <label>GST</label>
                    <input
                        type="text"
                        name="gst"
                        ref={register}
                        placeholder="Enter GST"
                        label="GST"
                    />
                 </div>
                <div className="d-flex justify-content-end">
                    <button className="ui button">Cancel</button>
                    <input type="submit" className="ui primary button ml-2"/>
                </div>
            </form>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        createParty: party => dispatch(createParty(party))
    };
}

export default connect(null, mapDispatchToProps)(AddParty);
