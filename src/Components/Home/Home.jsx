import React from 'react'
import RevealOnScroll from '../RevealOnScroll/RevealOnScroll'

const Home = () => {
    return (
        <section id='home' className='min-h-screen flex items-center justify-center pt-24 sm:pt-32 relative'>
            <RevealOnScroll>

                <div className="text-center z-10 px-4">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent loading-right ">
                        Hi, I'm Sanskar
                    </h1>

                    <p className='text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-sm sm:max-w-lg mx-auto px-2'>
                        As a passionate and dedicated entry-level web developer, I specialize in Python, Django, and React, with a solid
                        foundation in full-stack development principles and practices from projects and self-driven learning. Recognized
                        for strong problem-solving skills. Eager to bring my background in web development and my proactive approach
                        to solving complex problems to a dynamic team focused on innovative web development.
                    </p>

                    <div className='flex flex-col sm:flex-row justify-center items-center gap-4 space-x-4'>
                        <a href="#projects" className='bg-blue-500 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px rgba(50,130,246, 0.4)]'>View Projects</a>

                        <a href="#contact" className='border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px rgba(50,130,246, 0.2)] hover:bg-blue-500/10'>Contact Me</a>
                    </div>
                </div>
            </RevealOnScroll>


        </section>
    )
}

export default Home
