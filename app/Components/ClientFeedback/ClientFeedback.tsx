'use client';
import React, { useEffect, useState } from 'react';

interface ClientFeedback {
  name: string;
  message: string;
}

interface ClientFeedbackProps {
  feedbacks: ClientFeedback[];
  swapDelay?: number; // Delay for auto-swapping feedbacks
}

const ClientFeedback: React.FC<ClientFeedbackProps> = ({ feedbacks, swapDelay = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (feedbacks.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
    }, swapDelay);

    return () => clearInterval(interval);
  }, [feedbacks.length, swapDelay]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full">
      <div className="relative flex justify-center items-center  mx-auto overflow-hidden space-x-4">
        {feedbacks.map((feedback, index) => (
          <div
            key={index}
            className={`transition-all duration-700 ease-out transform p-6 bg-black text-white rounded-2xl flex-shrink-0 ${
              index === currentIndex ? 'opacity-100 scale-105 z-20' : 'opacity-50 scale-90 z-10'
            }`}
           style={{
              width: 'calc(33% - 16px)',// Adjust width to make sure three cards fit side by side
              transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
            }}

               
        
          >
            <h3 className="text-xl font-bold text-mora-red">{feedback.name}</h3>
            <p className="mt-4">{feedback.message}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {feedbacks.map((_, index) => (
          <span
            key={index}
            className={`dot cursor-pointer mx-1 w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-mora-red' : 'bg-gray-500'
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientFeedback;
