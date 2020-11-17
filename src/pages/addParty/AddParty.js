import React from 'react';
import { useForm } from "react-hook-form";
import Input from '../../components/formFields/input';
import TextArea from '../../components/formFields/textArea';

import "./addParty.scss";

const AddParty = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, ...rest) => {
        debugger
        console.log(data, rest);
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

export default AddParty;
