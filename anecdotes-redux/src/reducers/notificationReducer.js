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

export const showNotification = (message, duration) => {
  return async dispatch => {
    dispatch({
      type: 'SHOW_NOTIFICATION',
      data: message
    })
    await new Promise(r => setTimeout(r, duration * 1000))
    dispatch({
      type: 'HIDE_NOTIFICATION'
    })
  }
}

export default notificationReducer