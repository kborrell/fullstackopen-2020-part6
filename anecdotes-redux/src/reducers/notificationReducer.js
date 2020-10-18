const initialState = { message: '', visible: false }

const notificationReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SHOW_NOTIFICATION':
      return { message: action.data, visible: true }
    case 'HIDE_NOTIFICATION':
      return { message: '', visible: false }
    default:
      return state
  }
}

let timerId = null

export const showNotification = (message, duration) => {
  return async dispatch => {
    if (timerId) {
      clearTimeout(timerId)
      timerId = null
    }

    dispatch({
      type: 'SHOW_NOTIFICATION',
      data: message
    })

    timerId = setTimeout(() => {
      timerId = null
      dispatch({
        type: 'HIDE_NOTIFICATION'
      })
    }, duration * 1000)
  }
}

export default notificationReducer