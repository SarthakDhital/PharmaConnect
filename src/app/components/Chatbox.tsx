import { useState } from "react";
import axios from "axios";

const Chat = ({ setIsChatOpen }) => {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setIsLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/chat", { message });
      setReply(res.data.reply);
      setIsLoading(false);
    } catch (error) {
      console.error("Error sending message:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center bg-blue-500 text-white py-2 px-4 rounded-t-lg">
        <h2 className="font-bold">AI Chatbot</h2>
        <button className="text-white" onClick={() => setIsChatOpen(false)}>
          Close
        </button>
      </div>
      <div className="flex flex-col p-4 space-y-4 overflow-y-auto flex-grow bg-gray-50 rounded-b-lg">
        <div className="text-gray-600">Hello! How can I assist you today?</div>
        {reply && <div className="bg-blue-100 p-2 rounded">{reply}</div>}
        {isLoading && <div className="text-gray-500">Typing...</div>}
      </div>
      <div className="flex p-4 bg-white border-t">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask something..."
          className="w-full p-2 border rounded"
        />
        <button
          onClick={sendMessage}
          className="ml-2 p-2 bg-blue-500 text-white rounded"
          disabled={isLoading}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
