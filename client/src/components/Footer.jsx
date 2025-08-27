import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3'>
            <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500/80'>
                <div>
                    <img src={assets.logo} alt="logo" className='w-32 sm:w-44' />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint amet aperiam similique praesentium rerum minus officiis error, magnam dolores assumenda nihil facilis. Rem aliquam ab beatae sit ea consequatur possimus.</p>
                </div>
                <div className='flex flex-wrap justify-between w-full md:w-[-45%] gap-5'>
                    {footer_data.map((section, index) => (
                        <div key={index}>
                            <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2'>{section.title}</h3>
                            <ul className='text-sm space-y-1'>
                                {section.links.map((data, index) => (
                                    <li key={index}>
                                        <a href="#" className='hover:underline transition'>{data}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </div>
            <p className='py-3 text-center text-sm md:text-base text-gray-500/90'>
                Copyright 2025 &copy; QuickBlog. All rights reserved.
            </p>

        </div>
    )
}

export default Footer
