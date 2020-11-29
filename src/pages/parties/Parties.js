import React from 'react';
import {connect} from 'react-redux';
import Table from '../../components/table';

const Parties = (props) => {
    console.log(props.parties);
    return (
        <Table />
    )
};

const mapStateToProps = (state) => {
    return {
        parties: state.parties.parties,
    };
}

export default connect(mapStateToProps)(Parties);
