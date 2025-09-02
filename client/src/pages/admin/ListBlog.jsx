import React, { useEffect } from 'react'
import { blog_data } from '../../assets/assets'
import BlogTableItem from '../../components/admin/BlogTableItem'

const ListBlog = () => {

  const [blogs, setBlogs] = React.useState([])
  const fetchBlogs = async () => {
    setBlogs(blog_data)
  }

  useEffect(() => {
    fetchBlogs();
  }, [])


  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-value-50/50'>
      <h1>All blogs</h1>
      <div className='relative mt-4 h-4/5 overflow-x-auto shadow rounded-lg bg-white max-w-4xl scrollbar-hide '>
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-xs text-gray-400 uppercase text-left'>
            <tr>
              <th scope='col' className='px-2 py-4'>#</th>
              <th scope='col' className='px-2 py-4'>Blog title</th>
              <th scope='col' className='px-2 py-4 max:sm-hidden'>Date</th>
              <th scope='col' className='px-2 py-4 max:sm-hidden'>Status</th>
              <th scope='col' className='px-2 py-4'>Actions</th>
            </tr>
          </thead>

          <tbody>
            {blogs.map((blog, index) => {
              return <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchBlogs} index={index + 1} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListBlog
