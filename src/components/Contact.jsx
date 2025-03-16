import React from 'react';
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" class="py-20 lg:px-32 px-6">
            <h1 className='text-2xl font-semibold'>Contact</h1>

            <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="flex flex-col items-center">
                    <FaPhone className='text-5xl mb-1'/>
                    <h3 class="text-xl font-semibold mb-2 ">Phone</h3>
                    <p class="">+917569063069</p>
                </div>
                <div class="flex flex-col items-center">
                    <MdEmail className='text-5xl mb-1'/>
                    <h3 class="text-xl font-semibold mb-2 ">Email</h3>
                    <p class="">mavikeerthi.ee@gmail.com</p>
                </div>
                <div class="flex flex-col items-center">
                    <FaLinkedin className='text-5xl mb-1'/>
                    <h3 class="text-xl font-semibold mb-2 ">LinkedIn</h3>
                    <a href='https://www.linkedin.com/in/mavillapallyKeerthi/' target='_blank'>linkedin.com/in/mavillapallyKeerthi/</a>
                </div>
            </div>

        </section>
    );
};

export default Contact;