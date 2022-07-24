import React from 'react'

const ChatWindow = ({chat}) => {
    console.log(chat)
  return (
    <div>
        {chat.length > 0
        ?
        chat.map((message) => <p>{message.message}</p>)
        
        :
        <p>No conversations yet</p>
        }
    </div>
  )
}

export default ChatWindow