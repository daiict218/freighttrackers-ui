import React from 'react';
import {connect} from 'react-redux';

const Parties = (props) => {
    console.log(props.parties);
    return (
        <div>
            {'Parties'}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        parties: state.parties.parties,
    };
}

export default connect(mapStateToProps)(Parties);
