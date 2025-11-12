import axios from 'axios'
import { useState, useEffect } from 'react'
import Post from '../postList/post'
import styles from './styles.module.css'

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

  const postDel = async (id) => {
    try {
      await axios.delete(
        `https://691226ca52a60f10c820ce49.mockapi.io/posts/${id}`
      )
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={styles.postListContainer}>
      <h2 className={styles.postListTitle}>Список постов</h2>
      {posts.map((el) => (
        <Post
          key={el.id}
          title={el.title}
          text={el.text}
          id={el.id}
          avatar={el.avatar}
          onDelete={postDel}
        />
      ))}
    </div>
  )
}
export default PostList
