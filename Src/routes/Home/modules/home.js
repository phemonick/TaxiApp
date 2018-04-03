// contains action and handlers
import { Dimensions } from 'react-native';

import update from 'react-addons-update';
import constants from './actionConstants';
// ...................
// constants
// .................
const { GET_CURRENT_LOCATION, SET_NAME } = constants;
const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = ASPECT_RATIO * LATITUDE_DELTA;

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
            latitude: {
                $set: action.payload.coords.latitude
            },
            longitude: {
                $set: action.payload.coords.longitude
            },
            latitudeDelta: {
                $set: LATITUDE_DELTA
            },
            longitudeDelta: {
                $set: LONGITUDE_DELTA
            }
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
const initialState = {
    region: {}
};

export const HomeReducer = (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}
;
