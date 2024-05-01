import Messages from "./Messages"
import MessageInput from "./MessageInput"

const MessageContainer = () => {
  return (
    <div className="md:min-w-[450px] flex flex-col">
        <>
        <div className="bg-black px-4 py-2 mb-2">
            <span className="label-text font-bold">To:</span>{" "}
            <span className="text-gray-300 font-bold">John Doe</span>
        </div>

        <Messages/>
        <MessageInput/>
        </>
    </div>
  )
}

export default MessageContainer