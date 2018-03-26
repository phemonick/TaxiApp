// contains action and handlers
import update from 'react-addons-update';
import constants from './actionConstants';

// ...................
// constants
// .................
const { GET_CURRENT_LOCATION, SET_NAME } = constants;

// ...................
// actions
// .......................

export const getCUrrectLocation = () => (dispatch) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                dispatch({
                    type: GET_CURRENT_LOCATION,
                    payload: position
                });
            },
            (err) => console.log(err.message),         
            { enableHighAccuracy: false,
                timeout: 5000,
                maximumAge: 10000 }
        );
    };

export const setName = () => {
    const newLocal = 'Phemy';
    return {
        type: SET_NAME,
        payload: newLocal
    };
};

// ..........................
// Action handler
// ...........................

const handleGetCurrentLocation = (state, action) => update(state, {
        region: {
            $set: action.payload
        }
    });

const handleSetName = (state, action) => update(state, {
        name: {
            $set: action.payload
        }
    });
const ACTION_HANDLERS = {
    SET_NAME: handleSetName,
    GET_CURRENT_LOCATION: handleGetCurrentLocation
};
const initialState = {};

export const HomeReducer = (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}
;
