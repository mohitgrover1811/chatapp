import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../src/App.css'
import { sendMessage, getMessage } from '../actions/action'
import ChatWindow from './ChatWindow';

function Chat() {
    const [input, setInput] = useState('')
    const [chat, setChat] = useState([])
    const dispatch = useDispatch()

    const messages = useSelector((state) => state.reducers.list)
    
    useEffect(() => {
     console.error(messages)
    }, [messages])

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const onMessageSubmit = () => {
        
        const id = new Date().getTime()
        const message = input
        const author = 'user'
       dispatch(sendMessage( {id: new Date().getTime(), message, author} ))
       setInput('')
       setTimeout(() => {
        dispatch(sendMessage( {id: new Date().getTime(), message, author: 'bot'} ))
       }, 5000)
      
    }

    return (
        <div>
            <div>
                <h3>User</h3>
                <div className="chat-container">
                    <ChatWindow chat={messages} />
                </div>
            </div>
            <div className="btm">
                <input
                    type="text"
                    onInput={handleInputChange}
                    value={input}
                    placeholder="Enter message"
                ></input>
                <button onClick={onMessageSubmit}>Send</button>
            </div>
        </div>
    );
}

export default Chat;