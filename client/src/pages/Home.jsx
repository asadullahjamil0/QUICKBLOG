import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Bloglist from '../components/Bloglist'
import BlogCard from '../components/BlogCard'
import Newsletter from '../components/Newsletter'

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Bloglist />
      <BlogCard />
      <Newsletter />
    </div>
  )
}

export default Home
