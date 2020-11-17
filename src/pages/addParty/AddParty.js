import React from 'react';
import Input from '../../components/formFields/input';
import TextArea from '../../components/formFields/textArea';

import "./addParty.scss";

const AddParty = () => {
    return (
        <div className="add-parties-wrapper py-5">
            <form className="ui form">
                <h2>Enter Party Details</h2>
                <Input 
                    placeholder={'Enter Party Name'}
                    label="Party Name"
                />
                <TextArea 
                    placeholder={"Enter Party's address"}
                    label="Party Address"
                />
                <Input 
                    placeholder={"Enter Party's GST"}
                    label="GST"
                />
                <div className="d-flex justify-content-end">
                    <button className="ui button">Discard</button>
                    <button className="ui primary button ml-2">Save</button>
                </div>
            </form>
        </div>
    );
};

export default AddParty;
