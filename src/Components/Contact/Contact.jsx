import React, { useState } from 'react'
import RevealOnScroll from '../RevealOnScroll/RevealOnScroll'
import emailjs from 'emailjs-com'

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    // const SERVICE_ID = "service_48uf764";
    // const TEMPLATE_ID = "template_dwbvart";
    // const PUBLIC_KEY = "7fFWaYO8A1B5Mjslz";

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.VITE_SERVICE_ID, import.meta.VITE_TEMPLATE_ID, e.target, import.meta.VITE_PUBLIC_KEY).then((result) => {
            alert("Message sent successfully")
            setFormData({ name: "", email: "", message: "" })
        }).catch(() => {
            alert("Oops! Something went wrong. Please try again...")
        })
    }

    return (
        <section id='contact' className='min-h-screen items-center justify-center py-20 px-4 sm:px-6 lg:px-8'>
            <RevealOnScroll>
                <div className='flex flex-col items-center w-full'>
                    <div className="px-4 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
                        <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
                            Get In Touch
                        </h2>

                        <form action="" className='space-y-6' onSubmit={handleSubmit}>
                            <div className="relative">
                                <input type="text" id='name' name='name' required className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' placeholder='Name...' value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                            </div>

                            <div className="relative">
                                <input type="email" id='email' name='email' required className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' placeholder='example@gmail.com' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                            </div>

                            <div className="relative">
                                <textarea id='message' name='message' rows={5} required className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 resize-none' placeholder='Write your message...' value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                            </div>

                            <button type='submit' className='w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'>
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </RevealOnScroll>

        </section>
    )
}

export default Contact
