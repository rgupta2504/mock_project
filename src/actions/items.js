import axios from 'axios'
export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

// export function itemsFetchDataSuccess(items) {
//     return {
//         type: 'ITEMS_FETCH_DATA_SUCCESS',
//         items
//     };
// }


//fetch method

// export function itemsFetchData(url) {
//     return (dispatch) => {
//         dispatch(itemsIsLoading(true));

//         fetch(url)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw Error(response.statusText);
//                 }
//                 dispatch(itemsIsLoading(false));
//                 return response;
//             })
//             .then((response) => response.json())
//             .then((items) => dispatch(itemsFetchDataSuccess(items)))
//             .catch(() => dispatch(itemsHasErrored(true)));
//     };
// }
export function usersFetchDataSuccess(users) {
    return {
        type: 'USERS_FETCH_DATA_SUCCESS',
        users
    };
}

export function usersFetchData(url) {
    return (dispatch) => {
        return axios({
            url: url,
            timeout: 20000,
            method: 'GET',
            responseType: 'json'
        }).then((response) => {
            // console.log(response)
            return response.data;
           
        }).then((users) => {
            dispatch(usersFetchDataSuccess(users))

        })
    };
}

export function currentLoginUser(user){
    //console.log(user,'inside action')
    return {
        type: 'CURRENT_LOGIN_USER',
        user
    }
}

export function ordersFetchDataSuccess(orders) {
    return {
        type: 'ORDERS_FETCH_DATA_SUCCESS',
        orders
    };
}

export function ordersFetchData(url,method) {
    return (dispatch) => {
        if(method=='get'){
            return axios({
            url: url,
            timeout: 20000,
            method: 'GET',
            responseType: 'json'
        }).then((response) => {
            // console.log(response)
            return response.data;
        }).then((orders) => {
            dispatch(ordersFetchDataSuccess(orders))
        })
    }
    else if(method=='del'){
        return axios({
            url: url,
            timeout: 20000,
            method: 'DELETE',
            responseType: 'json'
        }).then((response) => {
            return response.data;
        }).then((orders) => {
            dispatch(ordersFetchDataSuccess(orders))
        }).catch(()=>
            dispatch(ordersFetchData(url,'get')))
    }    
    //if catch removed
    //Cannot read property 'slice' of null
    //get called to refresh the data
    };
    
}

export function instrumentsFetchDataSuccess(instruments) {
    return {
        type: 'INSTRUMENTS_FETCH_DATA_SUCCESS',
        instruments
    };
}

export function instrumentsFetchData(url) {
    return (dispatch) => {
        return axios({
            url: url,
            timeout: 20000,
            method: 'GET',
            responseType: 'json'
        }).then((response) => {
            // console.log(response)
            return response.data;
           
        }).then((instruments) => {
            dispatch(instrumentsFetchDataSuccess(instruments))

        })
    };
}

