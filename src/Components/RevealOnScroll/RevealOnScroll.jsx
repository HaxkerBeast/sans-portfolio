import React, { useEffect, useRef } from 'react'

const RevealOnScroll = ({ children }) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                ref.current.classList.add("visible")
            }
            else {
                ref.current.classList.remove("visible");
            }
        }, { threshold: 0.2, rootMargin: "0px 0px -50px 0px" });

        const currentRef = ref.current;

        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef)
        }
    }, []);

    return (
        <div ref={ref} className='reveal'>
            {children}
        </div>
    )
}

export default RevealOnScroll
