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

const ClientFeedback: React.FC<ClientFeedbackProps> = ({ feedbacks, swapDelay = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (feedbacks.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
    }, swapDelay);

    return () => clearInterval(interval);
  }, [feedbacks.length, swapDelay]);

  return (
    <div className="w-full px-4">
      <div className="relative flex justify-center items-center  text-center min-h-[300px] sm:min-h-[250px] lg:min-h-[300px]">
        {feedbacks.length > 0 && (
          <div
            key={currentIndex}
            className="absolute transition-all duration-700 ease-out transform p-6 bg-black text-white rounded-2xl w-full sm:w-1/2 lg:w-1/3 h-auto"
          >
            <h3 className="text-xl font-bold text-mora-red">{feedbacks[currentIndex].name}</h3>
            <p className="mt-2">{feedbacks[currentIndex].message}</p>
          </div>
        )}
      </div>
      <div className="flex justify-center mt-2">
        {feedbacks.map((_, index) => (
          <span
            key={index}
            className={`cursor-pointer mx-1 w-3 h-3 rounded-full ${index === currentIndex ? 'bg-mora-red' : 'bg-gray-500'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientFeedback;
