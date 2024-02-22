import React, { useState } from "react";
import profilePic from "../images/profilePic.jpg"; // Replace with the path to your image

const AboutMe = () => {
  const [messages, setMessages] = useState<string[]>([
    "Hello! I'm Wayne Wang, an AI researcher and software engineer with a passion for developing innovative solutions. In my professional journey, I've had the privilege of working with cutting-edge technologies at Berkeley EECS and co-founding GotHub.AI, where I manage a significant AI project. I specialize in reinforcement learning, cloud computing, and full-stack development. Outside of work, I'm an avid reader and tech enthusiast. I am always looking for new challenges and opportunities to grow and make a meaningful impact in the field of technology.",
    "Cool! Is this chat alive?",
    "Unfortunately as of now it is not. I am investigating how to make it alive with Weaviate and Llama2. Stay tuned!",
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };

  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-white py-12">
      <div className="md:w-1/3 flex justify-center items-center md:border-r md:border-gray-200">
        <img
          src={profilePic}
          alt="Wayne Wang"
          className="rounded-full w-24 h-24 md:w-32 md:h-32 border-4 border-gray-300"
        />
      </div>
      <div className="md:w-2/3 px-4 sm:px-6 lg:px-8">
        <div className="border-b-2 border-gray-200 mb-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Chat with Wayne
          </h1>
        </div>
        <div className="h-96 overflow-auto mb-4 p-4 border-2 border-gray-200 rounded-lg">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`rounded px-4 py-2 my-2 ${
                index % 2 === 0 ? "bg-blue-100" : "bg-green-100"
              } text-gray-700`}
            >
              {message}
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleEnterKey}
            placeholder="Type your message here..."
            className="flex-1 p-2 border-2 border-gray-200 rounded-l-lg focus:outline-none focus:border-blue-300"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 focus:outline-none"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
