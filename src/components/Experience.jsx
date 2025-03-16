import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

const Experience = () => {
    return (
        <section id="experience" class="py-20 lg:px-32 px-6">
            <h1 className='text-2xl font-semibold'>Experience</h1>

            <h2 className='mt-4 mb-2 text-xl'>Tata Consultancy Services</h2>
            <ol >
                <li class="mb-12 p-4 bg-slate-200 shadow-xl rounded-md">
                    <div class="group relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-3 text-lg">

                        <div class="z-10 mb-2 mt-1 font-semibold  tracking-wide text-slate-500 sm:col-span-2 text-sm">
                            Jul 2021 —  Jul 2023
                        </div>
                        <div class="z-10 sm:col-span-6 ">
                            <h3 class="font-medium leading-snug ">
                                <div>
                                    <a class="inline-flex items-baseline font-medium group/link ">
                                        <span >Backend Developer</span>
                                    </a>
                                </div>
                            </h3>
                            <ul class="mt-2 opacity-65 list-disc ml-4">
                                <li><p>Developed Application with Node.js working with micro services, express framework and asynchronous event driven approach.</p></li>
                                <li><p>Handled the application analytics by capturing and analysing the logs from Azure application insights, metrices and storing it in SQL DB using complex SQL queries.
                                </p></li>
                                <li><p>Worked on Notification management integrating Azure notification EventHub to handle application notifications and implemented a notification storage system using MongoDB collections and schemas.</p></li>
                                <li><p>Worked on ServiceNow knowledge Articles, Incidents, Catalogs and scripting and developed Contextual voice agent with Twilio.</p></li>
                                <li><p>Designed and developed a custom chat screen for live interaction between customers and agents using Genesys Cloud.</p></li>
                                <li><p>Implemented Azure Blob Storage solutions for storing unstructured data like images & videos.</p></li>
                            </ul>

                        </div>
                    </div>
                </li>

                <li class="mb-12 p-4 bg-slate-200 shadow-xl rounded-md">
                    <div class="group relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-3 text-lg">

                        <div class="z-10 mb-2 mt-1 font-semibold tracking-wide text-slate-500 sm:col-span-2 text-sm">
                            Aug 2023 — present
                        </div>
                        <div class="z-10 sm:col-span-6 ">
                            <h3 class="font-medium leading-snug ">
                                <div>
                                    <a class="inline-flex items-baseline font-medium group/link ">
                                        <span >Frontend Developer</span>
                                    </a>
                                </div>
                            </h3>
                            <ul class="mt-2 opacity-65 list-disc ml-4">
                                <li><p>Developed responsive web applications using HTML5, CSS3, and SASS to ensure cross-device compatibility (desktop, mobile).
                                </p></li>
                                <li><p>Using JavaScript implemented a custom accessibility flow for web applications, ensuring compliance with European accessibility guidelines (Web Accessibility Directive - WAD) and WCAG 2.1 standards.</p></li>
                                <li><p>Wrote test cases using Jest and achieved an overall test coverage of 95%, significantly reducing the number of production bugs and improving application reliability.</p></li>
                                <li><p>Managed and resolved Nexus vulnerabilities in the application’s dependencies using Sonatype Nexus Repository Manager.</p></li>
                                <li><p>Experience with triggering deployments Jenkins jobs and monitoring Jenkins logs for building and deploying code.</p></li>
                                <li><p>Regularly used Git for version control tasks such as creating, managing, and merging branches for different features, bug fixes, and releases.</p></li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ol>

        </section>
    );
};

export default Experience;