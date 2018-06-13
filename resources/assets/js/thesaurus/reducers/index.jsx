import { ADD_SYNONYM } from './../actions';

function thesaurusState (state = [], action) {
    switch (action.type) {
    case ADD_SYNONYM:
        return [
            ...state,
            {
                text: action.text
            }
        ];
    default:
        return state;
    }
}

export default thesaurusState;
