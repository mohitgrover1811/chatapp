import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../src/App.css'
// import { sendMessage, getMessage } from '../actions/action'
import ChatWindow from './ChatWindow';

function Chat() {
    const [input, setInput] = useState('')
    const [chat, setChat] = useState([])
    const [submitCount, setSubmitCount] = useState(0)


    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const handleUserMessage = () => {
        const id = new Date().getTime()
        const message = input
        const author = 'user'
        setChat([...chat, { id, message, author }])
    }


    const handleBotMessage = () => {
        
        const message = input
        const author = 'bot'
        setTimeout(() =>
            setChat([...chat, { id: new Date().getTime(), message, author }])
            , 3000);

    }


    const onSubmit = () => {
        handleUserMessage()
        handleBotMessage()

    }

    useEffect(() => {

    }, []) 

    

    // const botMessage = () => {
    //     const id = new Date().getTime()
    //     const message = input
    //     const author = 'bot'
    // }

    const onMessageSubmit = () => {
        if (input) {
            onSubmit()
            // const id = new Date().getTime()
            // const message = input
            // const author = 'user'
            // setChat([...chat, { id, message, author }])
            // setInput('')
        }
        else {
            alert('not a valid message')
        }

    }


    console.log(chat)


    return (
        <div>
            <div>
                <h3>User</h3>
                <div className="chat-container">
                    <ChatWindow chat={chat} />
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