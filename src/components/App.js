import React, { Component } from 'react';
import { connect } from 'react-redux';
import { usersFetchData, currentLoginUser,ordersFetchData,instrumentsFetchData } from '../actions/items';
import Main from './MainComponent'
import ReduxModal from 'react-redux-modal'
const mapStateToProps = (state) => {    
    return {
        users: state.users,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading,
        user_logged: state.user_logged,
        orders: state.orders,
        instruments: state.instruments
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(usersFetchData(url)),
        currentLoginUser: (user) => dispatch(currentLoginUser(user)),
        fetchTableData: (url,method) => dispatch(ordersFetchData(url,method)),
        instrumentsData: (url) => dispatch(instrumentsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
