import React from 'react'

async function page({ params }) {

  const { slug } = await params;
  return (
    <div>
      <h2>Blog post</h2>
      <p>{slug}</p>
    </div>
  )
}

export default page