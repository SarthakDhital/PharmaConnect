import { useState, useRef, useEffect } from "react";

const Chat = ({ setIsChatOpen }) => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<{ sender: string; text: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setIsLoading(true);

    const userMessage = message.trim();
    const lowerCaseMessage = userMessage.toLowerCase();
    let botReply = "On Development"; // Default response

    if (lowerCaseMessage === "hi" || lowerCaseMessage === "hello") {
      botReply = "Hi there!";
    }

    setChatHistory((prev) => [
      ...prev,
      { sender: "User", text: userMessage },
      { sender: "AI", text: botReply },
    ]);

    setIsLoading(false);
    setMessage(""); // Clear input after sending
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex justify-between items-center bg-blue-500 text-white py-2 px-4 rounded-t-lg">
        <h2 className="font-bold">AI Chatbot</h2>
        <button className="text-white" onClick={() => setIsChatOpen(false)}>
          Close
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex flex-col p-4 space-y-4 overflow-y-auto flex-grow bg-gray-50 rounded-b-lg">
        <div className="text-gray-600">Hello! How can I assist you today?</div>
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded ${msg.sender === "User" ? "bg-blue-100 self-end" : "bg-gray-200 self-start"}`}
          >
          {msg.text}
          </div>
        ))}
        <div ref={chatEndRef} />
        {isLoading && <div className="text-gray-500">Typing...</div>}
      </div>

      {/* Input Box */}
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
