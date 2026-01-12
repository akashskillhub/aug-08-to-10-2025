import React from 'react'

const Chat = () => {

    const chatting = [
        { message: "hi", user: "john" },
        { message: "hello", user: "ross" },
        { message: "ky kartoy", user: "john" },
        { message: "abhyass", user: "ross" },
        { message: "typescript complete", user: "ross" },
    ]


    return <>


        {
            chatting.map(item => <ChatBubble
                name={item.user}
                message={item.message}
                side={item.user === "john" ? "left" : "right"} />)
        }
        {/* {
            chatting.map(item => item.user === "john"
                ? <ChatBubble name={item.user} message={item.message} side="left" />
                : <ChatBubble name={item.user} message={item.message} side="right" />)
        } */}
    </>

}

const ChatBubble = ({ name, message, side }) => {
    return <>
        <div className={`chat ${side === "left" ? "chat-start" : "chat-end"}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                    />
                </div>
            </div>
            <div className="chat-header">
                {name}
                <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble">{message}</div>
            <div className="chat-footer opacity-50">Delivered</div>
        </div>
    </>
}

export default Chat