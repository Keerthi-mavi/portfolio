import React from 'react';

const Skills = () => {
    return (
        <section id="skills" class="bg-white py-20 lg:px-32 px-6">
            <h1 className='text-2xl font-semibold'>Skills</h1>
            <div>
                <h2 className='text-lg mt-3'>Front-end</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                    <div className="p-4 rounded-lg shadow-md text-center flex flex-col items-center"><img className="h-10 w-10 mb-2 transition-transform duration-300 transform hover:scale-110" src="https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/react/react-original.svg" alt="React" /><span class="font-semibold text-lightest-slate">React</span></div>

                    <div class="p-4 rounded-lg shadow-md text-center flex flex-col items-center"><img className="h-10 w-10 mb-2 transition-transform duration-300 transform hover:scale-110" src="https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/html5/html5-original.svg" alt="HTML" /><span class="font-semibold text-lightest-slate">HTML</span></div>

                    <div class="p-4 rounded-lg shadow-md text-center flex flex-col items-center"><img class="h-10 w-10 mb-2 transition-transform duration-300 transform hover:scale-110" src="https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/css3/css3-original.svg" alt="CSS" /><span _ class="font-semibold text-lightest-slate">CSS</span></div>

                    <div  class="p-4 rounded-lg shadow-md text-center flex flex-col items-center"><img  class="h-10 w-10 mb-2 transition-transform duration-300 transform hover:scale-110" src="https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/javascript/javascript-original.svg" alt="JavaScript" /><span  class="font-semibold text-lightest-slate">JavaScript</span></div>

                    <div  class="p-4 rounded-lg shadow-md text-center flex flex-col items-center"><img  class="h-10 w-10 mb-2 transition-transform duration-300 transform hover:scale-110" src="https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" /><span  class="font-semibold text-lightest-slate">Tailwind</span></div>
                </div>
            </div>
            <div>
                <h2 className='text-lg mt-3'>Back-end</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                    <div className="p-4 rounded-lg shadow-md text-center flex flex-col items-center"><img className="h-10 w-10 mb-2 transition-transform duration-300 transform hover:scale-110" src="https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/nodejs/nodejs-original.svg" alt="Node.js" /><span class="font-semibold text-lightest-slate">Node.js</span></div>

                </div>
            </div>
            <div>
                <h2 className='text-lg mt-3'>Database</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                    <div className="p-4 rounded-lg shadow-md text-center flex flex-col items-center"><img className="h-10 w-10 mb-2 transition-transform duration-300 transform hover:scale-110" src="https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mongodb/mongodb-original.svg" alt="MongoDB" /><span class="font-semibold text-lightest-slate">MongoDB</span></div>

                    <div className="p-4 rounded-lg shadow-md text-center flex flex-col items-center"><img className="h-10 w-10 mb-2 transition-transform duration-300 transform hover:scale-110" src="https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mysql/mysql-original.svg" alt="MySQL" /><span class="font-semibold text-lightest-slate">MySQL</span></div>

                    <div className="p-4 rounded-lg shadow-md text-center flex flex-col items-center"><img className="h-10 w-10 mb-2 transition-transform duration-300 transform hover:scale-110" src="	https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" alt="MS SQL" /><span class="font-semibold text-lightest-slate">MS SQL</span></div>
                </div>
            </div>

        </section>
    );
};

export default Skills;