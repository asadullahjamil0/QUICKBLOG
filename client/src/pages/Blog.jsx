import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, blog_data, comments_data } from '../assets/assets';
import Navbar from '../components/Navbar'
import moment from 'moment';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

function Blog() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [comments, setComments] = useState([])

    const [name, setName] = useState('');
    const [content, setContent] = useState('');

    console.log(name);


    const fetchBlogData = async () => {
        const data = blog_data.find(item => item._id === id)
        setData(data)
    }

    const fetchCommentsData = async () => {
        setComments(comments_data);
    }

    const handleSubmit = (e) => {
        e.prevent.default();
    }

    useEffect(() => {
        fetchBlogData();
        fetchCommentsData();
    }, [])

    return data ? (
        <div className='relative'>

            <img src={assets.gradientBackground} alt="" className='absolute opacity-50 -top-50 -z-1' />

            <Navbar />

            <div className='text-center mt-20 text-gray-600'>
                <p className='text-primary py-4 font-medium'>Published on {moment(data.createdAt).format("MMMM Do YYYY")}</p>
                <h1 className='text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800'>{data.title}</h1>
                <h2 className='my-5 max-w-lg truncate mx-auto' dangerouslySetInnerHTML={{ "__html": data.subTitle.slice(0, 80) }}></h2>
                <p className='inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary hover:scale-105 cursor-pointer transition-all'>James Clear</p>
            </div>

            <div className='mx-5 max-w-5xl md:mx-auto my-10 mt-6'>
                <img src={data.image} alt="" className='rounded-3xl mb-5' />

                <div className='rich-text mx-auto max-w-3xl' dangerouslySetInnerHTML={{ __html: data.description }}></div>

                <div className='mt-14 mb-10 max-w-3xl mx-auto'>
                    <h2 className='text-2xl font-semibold mb-6'>Comments ({comments.length})</h2>
                    <div className='flex flex-col gap-4'>
                        {comments.map((comments, index) => (

                            <div className='relative bg-primary/2 border p-4 border-primary/5 max-w-xl rounded text-gray-600' key={index}>

                                <div className='flex items-center gap-2 mb-2'>
                                    <img src={assets.user_icon} alt="" className='w-6' />
                                    <p className='font-medium'>{comments.name}</p>
                                </div>

                                <div>
                                    <p className='text-sm ml-8 max-w-md'>{comments.content}</p>
                                    <div className='absolute right-4 bottom-3 flex items-center gap-2 text-xs'>{moment(comments.createdAt).fromNow("MMMM Do YYYY")} ago</div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

                {/* Add Comment section */}
                <div className='max-w-3xl mx-auto my-10'>
                    <p className='font-semibold mb-4'>Add your comment</p>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4 items-start max-w-lg'>
                        <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Name' required className='w-full p-2 border border-gray-300 rounded outline-none' />

                        <textarea onChange={(e) => setContent(e.target.value)} value={content} required placeholder='Comment' className='w-full p-2 border border-gray-300 rounded outline-none h-48' ></textarea>
                        <button type="submit" className='bg-primary text-white p-2 rounded px-8 hover:scale-102 transition-all cursor-pointer'>Submit</button>

                    </form>

                </div>

                {/* Share buttons */}
                <div className='my-24 max-w-3xl mx-auto'>
                    <p className='font=semibold my-4'>Share this article on social media</p>
                    <div className='flex items-center'>
                        <img src={assets.twitter_icon} className='w-10 cursor-pointer' alt="" />
                        <img src={assets.facebook_icon} className='w-10 cursor-pointer' alt="" />
                        <img src={assets.googleplus_icon} className='w-10 cursor-pointer' alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    ) : <Loader />
}

export default Blog