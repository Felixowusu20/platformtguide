"use client";
import { useState, useRef, useEffect } from "react";
import chatbotData from "./chatbot_conversations.json";
// @ts-ignore
import fs from "fs";
const conversationFile = "/workspaces/platform_tguide_1/app/components/chatbot_conversations.json";
import { FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";

const  faq = [
  {
    q: "What is Tertiary Guide?",
    a: "Tertiary Guide is your trusted companion for all things tertiary education. We empower your journey with resources, guidance, and up-to-date information.",
  },
  {
    q: "What services do you offer?",
    a: "We provide information on university forms, WASSCE checkers, application guidance, and more to help you succeed in your tertiary journey.",
  },
  {
    q: "How can I contact Tertiary Guide?",
    a: "You can reach us via WhatsApp or email at info@tertiaryguide.com.",
  },
  {
    q: "What is your mission?",
    a: "Our mission is to empower students and parents with the right information and tools for tertiary education success.",
  },
  {
    q: "What is your vision?",
    a: "To be the leading platform for tertiary education guidance and support in Ghana and beyond.",
  },
  {
    q: "How do I check my WASSCE results?",
    a: "You can check your WASSCE results using our WASSCE Checker service. Just visit the WASSCE Checker page from the main menu.",
  },
  {
    q: "How do I apply for university forms?",
    a: "Go to the University Forms section on our site to find and apply for available forms. We provide step-by-step guidance.",
  },
  {
    q: "Can parents use Tertiary Guide?",
    a: "Absolutely! Tertiary Guide is designed for students, parents, and educators to make informed decisions about tertiary education.",
  },
  {
    q: "Is Tertiary Guide free?",
    a: "Most of our resources are free. Some premium services may require a fee, but you can access a lot of guidance at no cost.",
  },
  {
    q: "How do I get updates?",
    a: "Subscribe to our newsletter at the bottom of the page to get the latest updates and tips!",
  },
];


// Simple cosine similarity for arrays
function cosineSimilarity(a: number[], b: number[]) {
  const dot = a.reduce((sum, ai, i) => sum + ai * b[i], 0);
  const magA = Math.sqrt(a.reduce((sum, ai) => sum + ai * ai, 0));
  const magB = Math.sqrt(b.reduce((sum, bi) => sum + bi * bi, 0));
  return dot / (magA * magB);
}

// Dummy embedding function (replace with real model in production)
function embed(text: string): number[] {
  // Simple hash-based embedding for demo (not for production)
  const arr = new Array(32).fill(0);
  for (let i = 0; i < text.length; i++) {
    arr[i % 32] += text.charCodeAt(i);
  }
  return arr;
}

function getBotResponse(message: string): string {
  const inputEmbedding = embed(message.toLowerCase().trim());
  let bestScore = -1;
  let bestAnswer = null;
  for (const pair of chatbotData) {
    const qEmbedding = embed(pair.user.toLowerCase().trim());
    const score = cosineSimilarity(inputEmbedding, qEmbedding);
    if (score > bestScore) {
      bestScore = score;
      bestAnswer = pair.bot;
    }
  }
  // Threshold for match (tune as needed)
  if (bestScore > 0.85) {
    return bestAnswer + " (Thank you for your question!)";
  }
  // Greetings fallback
  if (["hi", "hello", "hey"].includes(message.toLowerCase().trim())) {
    return "Hello! Welcome to TertiaryGuide. How can I help you today?";
  }
  return "Sorry, I couldn't find an answer for that. Please ask about our services, mission, vision, or features. Thank you for reaching out!";
}

import Image from "next/image";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Array<{from: "user"|"bot", text: string}>>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { from: "user" as const, text: input };
    const botMsg = { from: "bot" as const, text: getBotResponse(input) };
    setMessages((msgs) => [...msgs, userMsg, botMsg]);
    setInput("");

    // Log conversation to API
    try {
      await fetch("/api/log-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: input, bot: botMsg.text }),
      });
    } catch (err) {
      // fail silently
    }
  };

  // On open, show only welcome message
  const handleOpen = () => {
    setMessages([{ from: "bot", text: "Welcome to TertiaryGuide Bot! How can I assist you today?" }]);
    setInput("");
    setOpen(true);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chatbot Button */}
      {!open && (
        <button
          className="bg-[#7c3aed] text-white p-2 rounded-full shadow-lg hover:bg-[#5b21b6] transition-colors flex items-center justify-center border-2 border-white relative w-12 h-12"
          onClick={handleOpen}
          aria-label="Open chatbot"
        >
          <span className="absolute -top-2 -right-2 bg-white rounded-full p-0.5 shadow">
            <Image src="/tguide.jpg" alt="Bot" width={20} height={20} className="rounded-full" />
          </span>
          <FaComments size={20} />
        </button>
      )}
      {/* Chatbot Window */}
      {open && (
        <div className="w-80 max-w-xs bg-white rounded-2xl shadow-2xl border border-[#e0e7ff] flex flex-col overflow-hidden animate-fadeIn" style={{height: 420}}>
          <div className="flex items-center justify-between bg-[#7c3aed] text-white px-4 py-3">
            <span className="flex items-center gap-2 font-bold text-lg">
              <Image src="/tguide.jpg" alt="Bot" width={28} height={28} className="rounded-full border-2 border-white" />
              Tertiary Guide Chat
            </span>
            <button onClick={() => setOpen(false)} aria-label="Close chatbot">
              <FaTimes size={20} />
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto bg-[#f8faff]" style={{minHeight: 0, maxHeight: 260}}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-3 flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className="flex items-end gap-2">
                  {msg.from === "bot" && (
                    <Image src="/tguide.jpg" alt="Bot" width={24} height={24} className="rounded-full border border-[#ffbe33]" />
                  )}
                  <div
                    className={`rounded-xl px-4 py-2 max-w-[80%] text-sm shadow ${
                      msg.from === "user"
                        ? "bg-[#7c3aed] text-white self-end"
                        : "bg-white text-[#22305a] border border-[#e0e7ff]"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={sendMessage} className="flex items-center border-t border-[#e0e7ff] bg-white px-2 py-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3 py-2 rounded-full border border-[#e0e7ff] focus:outline-none focus:ring-2 focus:ring-[#7c3aed] text-sm bg-[#f8faff]"
              placeholder="Type your question..."
              autoFocus
            />
            <button
              type="submit"
              className="ml-2 p-2 rounded-full bg-[#7c3aed] text-white hover:bg-[#5b21b6] transition-colors flex items-center justify-center"
              aria-label="Send message"
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
