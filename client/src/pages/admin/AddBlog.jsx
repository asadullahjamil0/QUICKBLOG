import React, { useState, useRef, useEffect } from 'react'
import { assets, blogCategories } from '../../assets/assets'
import Quill from 'quill'

const AddBlog = () => {

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [image, setImage] = useState(false)
  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [category, setCategory] = useState("Startup")
  const [isPublished, setIsPublised] = useState(false)

  const onSubmitHanlder = (e) => {
    e.preventDefault();
  }

  const generateContent = async () => {
    // generate content using AI
  }

  useEffect(() => {
    // Initiate quill only once
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        placeholder: 'Write something awesome...',
      });
    }

  }, [])

  console.log(category);


  return (
    <form className='flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll'>
      <div className='bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded'>

        <p>Upload thumbnail</p>

        <label htmlFor="image">
          <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" className='mt-2 h-16 rounded cursor-pointer' />
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
        </label>

        <p className='mt-4'>Blog title</p>
        <input type="text" placeholder='Type here' required className='w-full max-w-lg mt-2 p-2 border border-gray-300 online-none rounded' onChange={e => setTitle(e.target.value)} value={title} />

        <p className='mt-4'>Sub title</p>
        <input type="text" placeholder='Type here' required className='w-full max-w-lg mt-2 p-2 border border-gray-300 online-none rounded' onChange={e => setSubTitle(e.target.value)} value={subTitle} />

        <p className='mt-4'>Blog Description</p>
        <div className='max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative'>
          <div ref={editorRef} ></div>
          <button className='absolute bottom-1 right-2 ml-2 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline cursor-pointer' type='button' onClick={generateContent}>Generate with AI</button>
        </div>

        <p className='mt-4'>Blog category</p>
        <select onChange={e => setCategory(e.target.value)} name="category" className='mt-2 p-2 border border-gray-300 text-gray-500 outline-none rounded'>
          <option value="">Select category</option>
          {blogCategories.map((category, index) => {
            return <option value={category} key={index}>{category}</option>
          })}
        </select>

        <div className='mt-6 flex items-center gap-4'>
          <p>Publish Now</p>
          <input type="checkbox" checked={isPublished} className='scale-125 cursor-pointer' onChange={e => setIsPublised(e.target.checked)} />
        </div>
        <button type='submit' className='bg-primary text-white mt-8 w-40 h-10 rounded cursor-pointer'>Add blog</button>

      </div>

    </form>
  )
}

export default AddBlog
