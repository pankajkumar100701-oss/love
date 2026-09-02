"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [scene, setScene] = useState(0); // 0: Intro, 1: Celebration, 2: Message
  const [leaves, setLeaves] = useState<number[]>([]);

  useEffect(() => {
    setLeaves(Array.from({ length: 15 }, (_, i) => i));
  }, []);

  const scenes = [
    {
      title: "For You",
      button: "Open",
      content: "I have something special to tell you today, something that comes straight from my heart.",
    },
    {
      title: "A Little Something",
      button: "Continue",
      content: (
        <div className="max-h-64 overflow-y-auto pr-4 text-left">
          <p className="mb-4">Every day with you is a gift, and I find myself realizing more and more just how much you mean to me.</p>
          <p className="mb-4">You have a way of making everything feel brighter, warmer, and more beautiful just by being you.</p>
          <p className="mb-4">I wanted to take this moment to stop everything and let you know how truly special you are to me.</p>
        </div>
      ),
    },
    {
      title: "I love you",
      button: "Finish",
      content: "More than words could ever express, I love you, and I am so happy to be sharing this journey with you.",
    },
  ];

  const handleNext = () => {
    if (scene < scenes.length - 1) {
      setScene(scene + 1);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* ... (Leaves map - unchanged) ... */}
      {leaves.map((i) => (
        <div
          key={i}
          className="leaf"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 30 + 20}px`,
            height: `${Math.random() * 20 + 10}px`,
            animationDuration: `${Math.random() * 8 + 7}s`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}

      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="main-content">
          <h1 className="title">{scenes[scene].title}</h1>
          <div className="text-2xl mb-10 text-white">
            {scenes[scene].content}
          </div>
          {scene < scenes.length - 1 && (
            <button className="btn" onClick={handleNext}>
              {scenes[scene].button}
            </button>
          )}
        </div>
      </div>

      <div className="signature">Your Pankuu</div>
    </div>
  );
}
