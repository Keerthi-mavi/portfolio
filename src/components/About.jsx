import React from 'react';
const About = () => {
    return (
        <section id='about' className='relative h-[70rem] md:h-screen flex items-center justify-center overflow-hidden'>

            <div class="container mx-auto px-4 mt-28 md:mt-0">
                <div class="flex flex-col md:flex-row items-center justify-between">
                    <div class="md:w-1/3 mb-8 md:mb-0">
                        <img alt="MK_Image" loading="lazy" width="300" height="400" decoding="async" data-nimg="1" class="rounded-full shadow-lg bg-slate-500 xl:ml-20" src="/mk.jpg" />
                    </div>
                    <div class="md:w-2/3 md:pl-12">
                        <p className='text-lg'>Hello, I'm</p>
                        <h2 className='text-3xl font-bold'>Mavillapally Keerthi</h2>
                        <h3 className='text-2xl font-semibold mb-9'>Full-Stack developer</h3>
                        <p class="text-lg mb-6 ">
                            Software Engineer with more than 2 years of experience as a Fullstack developer. Experienced in Web Development, adept in contributing through all stages of web development. Good communication skills and a team player with a strong willingness to learn new technologies.
                        </p>
                        <p class="text-lg mb-6 ">
                            Interested in exploring new technologies, integrating and playing around with open source softwares.
                        </p>
                        <a class="bg-[#001c5579]  px-6 py-3 rounded-full font-semibold hover:bg-[#001c554d] transition-colors duration-300 mt-7" download="" href="/resume.pdf">Download Resume</a>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default About;