import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notifications = useSelector(state => state.notifications)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: notifications.visible ? '' : 'None'
  }

  return (
    <div style={style}>
      { notifications.message }
    </div>
  )
}

export default Notification