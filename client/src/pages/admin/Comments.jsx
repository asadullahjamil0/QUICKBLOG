import React, { useState, useEffect } from 'react'
import { comments_data } from '../../assets/assets'
import CommentTableItem from '../../components/admin/CommentTableItem'

const Comments = () => {

  const [comments, setComments] = useState([])
  const [filter, setFilter] = useState('all')

  const fetchComments = async () => {
    // fetch comments from backend
    setComments(comments_data)
  }

  useEffect(() => {
    fetchComments();
  }, [])

  return (
    <div className=' flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-value-50/50'>
      <div className='flex justify-between items-center max-w-3xl'>
        <h1>Comments</h1>
        <div className='flex gap-4'>
          <button onClick={() => setFilter("Approved")} className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-sm ${filter === 'Approved' ? 'text-primary' : 'text-gray-700'}`}>Approved</button>

          <button onClick={() => setFilter("Not Approved")} className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-sm ${filter === 'Not Approved' ? 'text-primary' : 'text-gray-700'}`}>Not Approved</button>
        </div>



      </div>

      <div className='relative mt-4 h-4/5 overflow-x-auto shadow rounded-lg bg-white max-w-4xl scrollbar-hide '>
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-xs text-gray-700 uppercase text-left'>
            <tr>
              <th scope='col' className='px-6 py-3'>Blog title & comment</th>
              <th scope='col' className='px-6 py-3 max:sm-hidden'>Date</th>
              <th scope='col' className='px-6 py-3'>Action</th>
            </tr>
          </thead>

          <tbody>
            {comments.filter((comment) => {
              if (filter === "Approved") return comment.isApproved === true;
              return comment.isApproved === false;
            }).map((comment, index) => {
              console.log(comment);

              return <CommentTableItem key={comment._id} comment={comment} index={index + 1} fetchComments={fetchComments} />
            })}
          </tbody>
        </table>
      </div>

    </div >
  )
}

export default Comments
