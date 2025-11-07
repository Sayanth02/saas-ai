'use client';
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const AccordionItem = ({ id, title, content, isOpen, onClick }) => {
  return (
    <div className="border border-gray-200 rounded-lg mb-3 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full px-4 md:px-6 py-4 md:py-5 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
        aria-expanded={isOpen}
        aria-controls={`content-${id}`}
      >
        <h3 className="text-left font-semibold text-gray-900 text-sm md:text-base">
          {title}
        </h3>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <Minus size={20} className="text-gray-600" />
          ) : (
            <Plus size={20} className="text-gray-600" />
          )}
        </div>
      </button>

      {isOpen && (
        <div
          id={`content-${id}`}
          className="px-4 md:px-6 py-4 md:py-5 bg-white border-t border-gray-200 text-gray-700 text-sm md:text-base leading-relaxed"
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default function Accordion() {
  const [openId, setOpenId] = useState(null);

  const items = [
    {
      id: 0,
      title: "What kind of AI sessions can I have on this platform?",
      content:
        "You can explore a wide variety of AI-driven sessions depending on your goals. Practice real-time mock interviews, learn new languages through interactive conversations, engage in roleplay simulations, or use AI as a creative partner to brainstorm ideas. Our platform supports both text-based chats and immersive video sessions with lifelike AI characters — so the way you learn, speak, or practice feels personal and effective.",
    },
    {
      id: 1,
      title: "Can I invite others to join my AI meeting?",
      content:
        "Yes, you can invite others to collaborate in your AI sessions. This feature allows you to share your learning experience with friends, colleagues, or team members, making it easy to practice together or learn collaboratively.",
    },
    {
      id: 2,
      title: "How are my sessions saved and organized?",
      content:
        "Your sessions are automatically saved and organized in your personal dashboard. You can view your session history, access past conversations, and organize them into categories or folders based on your preferences for easy retrieval.",
    },
    {
      id: 3,
      title: "Is the AI character customizable?",
      content:
        "Absolutely! You can customize the AI character to match your learning needs. Adjust personality traits, accent, expertise level, and interaction style to create a personalized learning experience that works best for you.",
    },
    {
      id: 4,
      title: "How secure is my data on this platform?",
      content:
        "Your data security is our top priority. We use industry-standard encryption protocols, secure servers, and comply with data protection regulations to ensure your personal information and session data remain confidential and protected.",
    },
  ];

  return (
    <div className="  p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="space-y-2">
          {items.map((item) => (
            <AccordionItem
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
              isOpen={openId === item.id}
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
