import {
    ADD_TECH,
    DELETE_TECH,
    GET_TECHS,
    SET_LOADING,
    TECHS_ERROR
} from './types';

export const getTechs = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/techs');
        const data = await res.json();
        
        dispatch({
            type: GET_TECHS,
            payload: data
        })
    }catch(err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        })
    }
};

export const addTechs = (tech) => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/techs', {
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {
                'Content-Type': "application/json"
            }
        });
        const data = await res.json();
        
        dispatch({
            type: ADD_TECH,
            payload: data
        })
    }catch(err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        })
    }
};

// delete tech

export const deleteTech = (tech) => async dispatch => {
    try {
        setLoading();
        await fetch(`/techs/${tech.id}`, {
            method: 'DELETE'
        });
        
        dispatch({
            type: DELETE_TECH,
            payload: tech
        })
    }catch(err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        })
    }
};

// set loading to true

export const setLoading = () => {
    return {
        type: SET_LOADING
    };
}