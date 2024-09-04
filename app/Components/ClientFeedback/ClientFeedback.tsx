'use client';
import React, { useEffect, useState } from 'react';

interface ClientFeedback {
  name: string;
  message: string;
}

interface ClientFeedbackProps {
  feedbacks: ClientFeedback[];
  swapDelay?: number;
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

  const getPositionClass = (index: number) => {
    if (index === currentIndex) return 'z-20 opacity-100 scale-105';
    if (index === (currentIndex + 1) % feedbacks.length) return 'z-10 opacity-50 scale-90 translate-x-12';
    if (index === (currentIndex - 1 + feedbacks.length) % feedbacks.length) return 'z-10 opacity-50 scale-90 -translate-x-12';
    return 'opacity-0 scale-90';
  };

  return (
    <div >
      <div className="relative flex justify-center items-center mx-auto space-x-4" style={{ width: '100%', height: '300px' }}>
        {feedbacks.map((feedback, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-700  justify-center items-center ease-out transform p-6 bg-black text-white rounded-2xl ${getPositionClass(index)}`}
            style={{
              width: 'fit-content',
              transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
            }}
          >
            <h3 className="text-xl font-bold text-mora-red">{feedback.name}</h3>
            <p className="mt-5">{feedback.message}</p>
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
