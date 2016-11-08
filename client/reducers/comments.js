/**
 * Created by klaus on 07/11/16.
 */

function postComments (state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [
                ...state,
                {
                    user: action.author,
                    text: action.comment
                }
            ];
            break;

        case 'REMOVE_COMMENT':
            console.log('action remove', action.i);

            console.log([
                ...state.slice(0, action.i),
                ...state.slice(action.i + 1, state.length)
            ]);

            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
            break;

        default:
            return state;
    }
}

function comments(state = [], action) {
    if (typeof action.postId !== 'undefined') {
        return {
            ...state,
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}

export default comments;