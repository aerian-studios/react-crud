import * as types from './actionTypes'
import axios from 'axios'

function requestListData() {
    return {type: types.REQUEST_LIST_DATA}
}

function receiveListData(json) {
    return{
        type: types.RECEIVE_LIST_DATA,
        data: json
    }
}

function receiveListDataError(json) {
    return {
        type: types.RECEIVE_LIST_DATA_ERROR,
        data: json
    }
}

export function fetchListData(url) {
    return function(dispatch) {
        dispatch(requestListData())

        //setTimeout(function(){

            return axios({
                url: url,
                timeout: 20000,
                method: 'get',
                responseType: 'json'
            })
                .then(function(response) {
                    dispatch(receiveListData(response.data))
                })
                .catch(function(response){
                    dispatch(receiveListDataError(response.data))
                    //dispatch(pushState(null,'/error'));
                })

        //}, 1000)

    }
}
