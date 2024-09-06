import React, { useState, useEffect } from 'react';

interface Card {
    id: number;
    speaker: string;
    content: string;
}

const cardsData: Card[] = [
    { id: 1, speaker: 'Mahesh Wickramasinghe', content: 'The first and the best media for sports.' },
    { id: 2, speaker: 'Chamaka Rajapaksha', content: 'Thank you Moraspirit for your coverage on Interuni. Wish you all the best.' },
    { id: 3, speaker: 'Gobinarth Sivarajar', content: 'Excellent media platform for the Sri Lankan Uni guys.Wish all the best team MORASPIRIT' },
];

const ClientFeedback: React.FC = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
    const [screenWidth, setScreenWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const getSpaceFactor = (): number => {
        if (screenWidth > 1024) return 40;
        if (screenWidth > 768) return 55;
        if (screenWidth > 512) return 70;
        return 90;
    };

    return (
        <>
            <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
                <div className="absolute md:w-1/4 h-full bg-gradient-to-r from-[#070707] to-transparent left-0 z-10"/>
                <div className="absolute md:w-1/4 h-full bg-gradient-to-l from-[#070707] to-transparent right-0 z-10"/>
                {cardsData.map((card, index) => (
                    <div
                        key={card.id}
                        className="absolute w-full h-full flex items-center justify-center transition-transform duration-1000 ease-in-out"
                        style={{
                            transform: `translateX(${(index - currentCardIndex) * getSpaceFactor()}%)`,
                            zIndex: index === currentCardIndex ? 1 : 0,
                        }}
                    >
                        <div className="block max-w-sm p-6 mx-8 md:mx-0 bg-[#0C0C0C] rounded-lg">
                            <h5 className="mb-2 text-xl font-bold text-center tracking-tight text-mora-red">
                                {card.speaker}
                            </h5>
                            <p className="font-normal text-sm text-gray-400 text-center">
                                {card.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center w-full py-6">
                {cardsData.map((_, index) => (
                    <a
                        key={index}
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            setCurrentCardIndex(index);
                        }}
                        className="w-3 h-3 mx-2 rounded-full bg-mora-red transition-transform duration-1000 ease-in-out"
                        style={{
                            transform: `scale(${index === currentCardIndex ? 1.5 : 1})`,
                        }}
                    />
                ))}
            </div>
        </>
    );
};

export default ClientFeedback;
