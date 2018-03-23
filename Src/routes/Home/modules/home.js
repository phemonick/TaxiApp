// contains action and handlers
import update from 'react-addons-update';
import constants from './actionConstants';

// const {} = constants;
const ACTION_HANDLERS = {

};
const initialState = {};

export const HomeReducer = (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}
;