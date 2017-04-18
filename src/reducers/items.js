export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function users(state = [], action) {
    switch (action.type) {
        case 'USERS_FETCH_DATA_SUCCESS':
            return action.users;

        default:
            return state;
    }
}

export function user_logged(state=[],action){
    switch(action.type){
        case 'CURRENT_LOGIN_USER':
            //console.log(action.user,'inside reducer');
            return action.user;
        default :
            return state;
    }
}

export function orders(state=[],action){
    switch(action.type){
        case 'ORDERS_FETCH_DATA_SUCCESS':
            return action.orders;
        default:
            return state;
    }
}

export function instruments(state = [], action) {
    switch (action.type) {
        case 'INSTRUMENTS_FETCH_DATA_SUCCESS':
            return action.instruments;
        default:
            return state;
    }
}