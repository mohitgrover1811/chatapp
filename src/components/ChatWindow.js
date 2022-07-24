import React from 'react'

const ChatWindow = ({chat}) => {
    
  return (
    <div>
        {chat && chat.length > 0 
        ?
        chat.map((message) => <p>{message.data.message}</p>)
        
        :
        <p>No conversations yet</p>
        }
    </div>
  )
}

export default ChatWindow