import React, { Component } from 'react';
import { connect } from 'react-redux';
import { usersFetchData, currentLoginUser,ordersFetchData,instrumentsFetchData,pushNotification } from '../actions/items';
import Main from './MainComponent'
import ReduxModal from 'react-redux-modal'
const mapStateToProps = (state) => {    
    return {
        users: state.users,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading,
        user_logged: state.user_logged,
        orders: state.orders,
        instruments: state.instruments,
        // push_notification: state.push_notification
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(usersFetchData(url)),
        currentLoginUser: (user) => dispatch(currentLoginUser(user)),
        fetchTableData: (url,method,data) => dispatch(ordersFetchData(url,method,data)),
        instrumentsData: (url) => dispatch(instrumentsFetchData(url)),
        pushnotification: (msg,data) => dispatch(pushNotification(msg,data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
