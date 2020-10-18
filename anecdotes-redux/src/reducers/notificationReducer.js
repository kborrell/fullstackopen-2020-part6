const initialState = { message: '', visible: false }

const notificationReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SHOW_NOTIFICATION':
      return { message: action.data.message, visible: true }
    case 'HIDE_NOTIFICATION':
      return { message: '', visible: false }
    default:
      return state
  }
}

export const showNotification = (message) => {
  return {
    type: 'SHOW_NOTIFICATION',
    data: {
      message
    }
  }
}

export const hideNotification = () => {
  return {
    type: 'HIDE_NOTIFICATION'
  }
}

export default notificationReducer