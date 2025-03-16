import React from 'react';
import { AiFillSafetyCertificate } from "react-icons/ai";

const Certificates = () => {
    return (
        <section id="certificates" class="py-20 lg:px-32 px-6 bg-white">
            <h1 className='text-2xl font-semibold'>Certificates</h1>

            <div className='container'>
                <ol className='mt-4 mb-2 text-xl'>
                    <div></div>
                    <li className='flex p-2 items-center '>
                        <AiFillSafetyCertificate className='text-lg h-5 w-6' />
                        <a href='https://www.udemy.com/certificate/UC-07763ec5-c020-429e-ba8e-038770ded72f/' target="_blank" className='px-4'>The Complete Node.js Developer Course 
                        </a>
                    </li>
                    <li className='flex p-2 items-center'>
                        <AiFillSafetyCertificate className='text-lg  h-5 w-6' />
                        <a href='https://coursera.org/verify/63RPHLANJR2V' target="_blank" className='px-4'>HTML5 by Coursera
                        </a>
                    </li>
                    <li className='flex p-2 items-center'>
                        <AiFillSafetyCertificate className='text-lg  h-5 w-6' />
                        <a href='https://www.credly.com/badges/c3845841-d4a4-4d19-959a-773f43c00141/public_url' target="_blank" className='px-4'>AWS Certified Cloud Practitioner
                        </a>
                    </li>
                </ol>
            </div>

        </section>
    );
};

export default Certificates;