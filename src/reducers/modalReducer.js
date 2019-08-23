import {
    OPEN_DELETE_MODAL,
    CLOSE_DELETE_MODAL
} from "../actions/types";

export default (state = {modalIsOpen: false}, action) => {
    switch (action.type) {
        case OPEN_DELETE_MODAL:
            return {
                ...state,
                modalIsOpen: true,
                streamId: action.payload.streamId,
                title: action.payload.title
            }
        case CLOSE_DELETE_MODAL:
            return {
                ...state,
                modalIsOpen: false,
                streamId: null,
                title: null
            }
        default:
            return state
    }
}