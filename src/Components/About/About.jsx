import React from 'react'
import RevealOnScroll from '../RevealOnScroll/RevealOnScroll'

const About = () => {
    const frontEndSkills = ["Html", "CSS", "BootStrap", "TailwindCss", "React"]
    const backEndSkills = ["Python", "nodeJS", "MySQL", "MongoDB", "Django"]

    return (
        <section id='about' className='min-h-screen flex items-center justify-center py-20 px-4 sm:px-8'>
            <RevealOnScroll>
                <div className='max-w-3xl mx-auto px-4'>
                    <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>About Me</h2>

                    <div className='rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all'>
                        <p className='text-gray-300 mb-6 text-center'>
                            Passionate Full Stack Web developer with knowledge in Python, ReactJs and Django to create cool and innovative projects
                        </p>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                                <h3 className='text-xl font-bold mb-4'>Frontend</h3>
                                <div className='flex flex-wrap gap-2'>
                                    {frontEndSkills.map((tech, index) => {
                                        return (
                                            <span key={index} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition'>
                                                {tech}

                                            </span>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                                <h3 className='text-xl font-bold mb-4'>Backend</h3>
                                <div className='flex flex-wrap gap-2'>
                                    {backEndSkills.map((tech, index) => {
                                        return (
                                            <span key={index} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition'>
                                                {tech}

                                            </span>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                        <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
                            <h3 className='text-xl font-bold mb-4'>
                                Education Qualification
                            </h3>
                            <ul className='list-disc list-inside text-gray-300 space-y-2'>
                                <li><strong>B.E In Instrumentation / Robotics</strong> - Vivekananda Education Society's Institute of Technology</li>

                                <li><strong>H.S.C</strong> - Pirojsha Godrej Junior College</li>

                                <li><strong>S.S.C</strong> - Pujya Chitre Guruji English Medium High School</li>
                            </ul>
                        </div>

                        <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
                            <h3 className='text-xl font-bold mb-4'>
                                Additional Course
                            </h3>

                            <div className='space-y-4 text-gray-300'>
                                <div className='space-y-2'>
                                    <h4 className='font-semibold'>
                                        <strong>Full Stack Web Development</strong> - TryCatch Classes

                                    </h4>
                                    <p>Completed a comprehensive full stack development program focused on Python-based technologies, covering both front-end and back-end development.</p>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </RevealOnScroll>

        </section>
    )
}

export default About
