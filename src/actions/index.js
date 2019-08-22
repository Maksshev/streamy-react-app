import streams from '../apis/streams';
import history from '../history';
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    EDIT_STREAM,
    DELETE_STREAM
} from "./types"

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const createStream = formValues => async (dispatch, getState) => {
    const {userId} = getState().auth
    const createdStream = await streams.post('/streams', {...formValues, userId})
    dispatch({
        type: CREATE_STREAM,
        payload: createdStream.data
    })
    history.push('/')
}

export const fetchStreams = () => async dispatch => {
    const fetchedStreams = await streams.get('/streams')
    dispatch({
        type: FETCH_STREAMS,
        payload: fetchedStreams.data
    })
}

export const fetchStream = id => async dispatch => {
    const fetchedStream = await streams.get(`/streams/${id}`)
    dispatch({
        type: FETCH_STREAM,
        payload: fetchedStream.data
    })
}

export const editStream = (id, formValues) => async dispatch => {
    const editedStream = await streams.patch(`/streams/${id}`, formValues)
    dispatch({
        type: EDIT_STREAM,
        payload: editedStream.data
    })
    history.push('/')
}

export const deleteStream = id => async dispatch => {
    await streams.delete(`/streams/${id}`)
    dispatch({
        type: DELETE_STREAM,
        payload: id
    })
}

