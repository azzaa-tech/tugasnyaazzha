import React from 'react'

export default async function page() {
  return (
    <main className='min-h-screen bg-pink-200 p-8 font-sans'>
        <div className='mb-4 text-white mx-auto max-w-4xl'>
            <h1 className='text-3xl font-semibold mb-6 text-center'>Belajar data fecth</h1>
            <div className='grid grid-col-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
                {posts.map((post) => (
                    <div key={post.id} className='bg-pink-300 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                        <h2 className='text-xl font-bold mb-2'>{post.title}</h2>
                        <p className='text-white'>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    </main>
)
}