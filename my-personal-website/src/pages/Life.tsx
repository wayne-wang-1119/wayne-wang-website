import React, { useState } from "react";
import profilePic from "../images/profilePic.jpg"; // Replace with the path to your image
import { HfInference } from "@huggingface/inference";
const AboutMe = () => {
  const [messages, setMessages] = useState<string[]>([
    "Hello! I'm Wayne Wang, an AI researcher and software engineer with a passion for developing innovative solutions.",
    "Cool! What is this weird looking chat?",
    "This is something I built for fun! I added RAG + HuggingFace to make my own trivia chat bot. Ask any question you will get response like how the 'real' Wayne would answer them",
    "This is so cool! Are my activities tracked?",
    "Not at all. I have no interest in what you are up to at my page, feel free to exploit this a bit and have fun! PS: If nothing shows up, it means I am rate limited by HF. ",
  ]);

  const [newMessage, setNewMessage] = useState("");

  const hf = new HfInference(process.env.HUGGINGFACE);

  const handleSendMessage = async () => {
    console.log(process.env.HUGGINGFACE);
    if (newMessage.trim() !== "") {
      setMessages([...messages, newMessage]);
      const context = `
Wayne Wang is an engineer who enjoys activities like hiking, building cars, vlogging, and cooking.
Wayne is reasonably handsome, 6/10.
Wayne's biggest achievement so far is not building acclaimed software, but successfully married to the best women known on earth.
Wayne served as TA for 3 years at Cal, and Research Assistant at EECS, Stats, and Haas Business school for 2 years.
Wayne made some money from making user-loved Apps; recently, Wayne is working hard to become an LLM Engineering expert. Answer questions about Wayne the way Wayne would answer them.
Wayne Wang is a multifaceted engineer with a passion for leveraging technology to create innovative solutions. With a strong background in both engineering and research, Wayne has a diverse skill set that spans across programming, software development, and machine learning. His love for hiking, building cars, vlogging, and cooking reflects his versatile interests outside the professional sphere. Wayne's notable personal accomplishment is his successful marriage, which he considers his biggest achievement.
Wayne's biggest fear is not making a huge entrance.
Wayne has an extensive educational background from the University of California, Berkeley, where he not only excelled academically but also contributed significantly as a Teaching Assistant and Research Assistant across various departments including EECS, Stats, and the Haas Business School. This experience has equipped him with a unique blend of technical expertise and practical experience in a multidisciplinary environment.
Wayne's Experience and Projects:
Researcher at UC Berkeley EECS: Spearheaded an open-source project, CktGym, achieving significant funding and recognition. Demonstrated expertise in designing and developing hardware RL-based simulation systems, data processing, and monitoring pipelines, enhancing service performance, and scalability.
Founding Software Engineer at GotHub.AI: Engineered a data engine from scratch, securing substantial funding. Showcased skills in developing a MultiAgent Framework, full-stack development, and integrating real-time data manipulation technologies.
Machine Learning Engineer Intern at ColossalAI: Optimized GAN models significantly, showcasing his ability in machine learning and deep learning technologies.
Software Engineer Intern at BART: Developed a full-stack heat map application, enhancing client resource allocation. Implemented a RabbitMQ and Celery pipeline for efficient data processing.
Project Highlights:
Reunion: Designed an AI-generated FaceTime app, integrating advanced text-to-speech and video face swap technologies. Achieved cyber-immortality for users, winning substantial hackathon prizes.
Micro-services Based User Management System: Led the design of a full-stack web application, implementing Docker and Kubernetes for deployment, and developing a real-time UI for user data management.
FindME: Created a multi-platform app for locating entrepreneurs, implementing real-time mapping, and integrating various cloud services and APIs for enhanced functionality.
`;

      const requestBody = {
        inputs: {
          question: newMessage,
          context: context,
        },
      };

      try {
        const response = await hf.questionAnswering({
          model: "deepset/roberta-base-squad2",
          inputs: {
            question: requestBody.inputs.question,
            context: requestBody.inputs.context,
          },
        });
        const data = response.answer;

        setMessages((currentMessages) => [...currentMessages, data]);
      } catch (error) {
        console.error("Failed to fetch answer from Hugging Face:", error);
      }

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
        <div className="border-b-2 border-gray-100 mb-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Chat with Wayne
          </h1>
        </div>
        <div className="h-96 overflow-auto mb-4 p-4 border-2 border-gray-300 rounded-lg">
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
            placeholder="What is your biggest achievement?..."
            className="flex-1 p-2 border-2 border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-300"
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
