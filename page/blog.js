import { useEffect, useState } from 'react'
import { client } from '../sanity'
import Lottie from 'lottie-react'
import '@google/model-viewer'

export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "post"]{
        title,
        slug,
        mainImage,
        content,
        animation,
        model3D
      }`
      const data = await client.fetch(query)
      setPosts(data)
    }
    fetchPosts()
  }, [])

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center' }}>Blog Posts</h1>
      {posts.map(post => (
        <div key={post.slug} style={{ marginBottom: '50px', borderBottom: '1px solid #ccc', paddingBottom: '30px' }}>
          <h2>{post.title}</h2>
          {post.mainImage && <img src={post.mainImage} alt={post.title} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />}
          <p style={{ marginTop: '15px' }}>{post.content}</p>

          {post.animation && (
            <div style={{ marginTop: '20px' }}>
              <Lottie
                animationData={await fetch(post.animation).then(res => res.json())}
                loop={true}
                style={{ width: '400px', height: '400px', margin: 'auto' }}
              />
            </div>
          )}

          {post.model3D && (
            <div style={{ marginTop: '20px' }}>
              <model-viewer
                src={post.model3D}
                alt="3D Model"
                auto-rotate
                camera-controls
                style={{ width: '500px', height: '500px', margin: 'auto', display: 'block' }}
              ></model-viewer>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
