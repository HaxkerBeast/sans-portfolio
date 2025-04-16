import React from 'react'
import RevealOnScroll from '../RevealOnScroll/RevealOnScroll'

const Projects = () => {
    return (
        <section id='projects' className='min-h-screen flex items-center justify-center py-20'>
            <RevealOnScroll>
                <div className='max-w-5xl mx-auto px-4'>
                    <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
                        Featured Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition'>
                            <h3 className='text-xl font-bold mb-2'>
                                DCRM App
                            </h3>
                            <p className='text-gray-400 mb-4'>Designed to handle customer interactions and data
                                with CRUD Operation using Django and Python.
                            </p>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {["Python", "MySQL", "Html", "Bootstrap", "Django"].map((tech, index) => {
                                    return (
                                        <span key={index} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all'>
                                            {tech}

                                        </span>
                                    )
                                })}
                            </div>

                            <div className='flex justify-between items-center'>
                                <a href="#" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>
                                    View Project &rarr;
                                </a>
                            </div>

                        </div>

                        <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition'>
                            <h3 className='text-xl font-bold mb-2'>
                                Finance Tracker
                            </h3>
                            <p className='text-gray-400 mb-4'> A python based income and expense tracker
                                which is used to plot the graph based on net savings in a given
                                time range
                            </p>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {["Python", "Html", "Bootstrap"].map((tech, index) => {
                                    return (
                                        <span key={index} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all'>
                                            {tech}

                                        </span>
                                    )
                                })}
                            </div>

                            <div className='flex justify-between items-center'>
                                <a href="#" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>
                                    View Project &rarr;
                                </a>
                            </div>

                        </div>

                        <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition'>
                            <h3 className='text-xl font-bold mb-2'>
                                Game x 2048
                            </h3>
                            <p className='text-gray-400 mb-4'> Python pygame coded game. Players slide tiles on a 4x4
                                grid to combine matching numbers, aiming to create a 2048 tile.
                                The game features logic for tile movement, merging, and
                                random tile addition, ensuring an engaging gameplay
                                experience.
                            </p>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {["Python", "PyGame", "TKinter"].map((tech, index) => {
                                    return (
                                        <span key={index} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all'>
                                            {tech}

                                        </span>
                                    )
                                })}
                            </div>

                            <div className='flex justify-between items-center'>
                                <a href="#" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>
                                    View Project &rarr;
                                </a>
                            </div>

                        </div>

                        <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition'>
                            <h3 className='text-xl font-bold mb-2'>
                                Youtube-Clone
                            </h3>
                            <p className='text-gray-400 mb-4'>
                                Developed a responsive YouTube clone using React.js, mimicking core functionalities like video browsing, categories, and playback.Integrated YouTube Data API to fetch and display dynamic content based on user interactions.
                            </p>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {["ReactJS", "Javascript", "CSS"].map((tech, index) => {
                                    return (
                                        <span key={index} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all'>
                                            {tech}

                                        </span>
                                    )
                                })}
                            </div>

                            <div className='flex justify-between items-center'>
                                <a href="#" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>
                                    View Project &rarr;
                                </a>
                            </div>

                        </div>


                    </div>
                </div>
            </RevealOnScroll>

        </section>
    )
}

export default Projects
