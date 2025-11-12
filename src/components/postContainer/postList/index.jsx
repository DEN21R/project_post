import axios from 'axios'
import { useState, useEffect } from 'react'
import Post from '../postList/post'

function PostList() {
  const [posts, setPosts] = useState([])

  const fetchPost = async () => {
    try {
      const responce = await axios.get(
        'https://691226ca52a60f10c820ce49.mockapi.io/posts'
      )
      setPosts(responce.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <div>
      {posts.map((el) => (
        <Post title={el.title} text={el.text} id={el.id} avatar={el.avatar} />
      ))}
    </div>
  )
}
export default PostList
