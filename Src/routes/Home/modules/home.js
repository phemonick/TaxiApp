// contains action and handlers
import update from 'react-addons-update';
import constants from './actionConstants';

const { SET_NAME } = constants;
// action
export const setName = () => {
    const newLocal = 'Phemy';
    return {
        type: SET_NAME,
        payload: newLocal
    };
};

const handleSetName = (state, action) => update(state, {
        name: {
            $set: action.payload
        }
    });
const ACTION_HANDLERS = {
    SET_NAME: handleSetName
};
const initialState = {};

export const HomeReducer = (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}
;
