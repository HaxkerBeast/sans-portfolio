import React, { useEffect, useState } from 'react'

const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "<Hello World />";
    // const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval)

                setTimeout(() => {
                    // setIsVisible(false);
                    onComplete();
                }, 1000)
            }
        }, 100);

        return () => {
            clearInterval(interval);
        }

    }, [onComplete]);


    return (
        <section className="min-h-screen pt-20 flex items-center justify-center">
            <div className={`fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center transition-opacity`}>
                {/*<div className="mb-4 text-3xl font-mono font-bold">{text}<span className='animate-blink ml-1'> | </span></div>

                <div className='w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden'>
                    <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
                </div>*/}
                <div className="flex flex-col items-center gap-1">
                    <div className="text-3xl font-mono font-bold flex items-center">
                        {text}
                        <span className='animate-blink ml-1'> | </span>
                    </div>

                    <div className='w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden'>
                        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default LoadingScreen
