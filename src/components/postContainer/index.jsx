import PostForm from './postForm'
import PostList from './postList'
import styles from './styles.module.css'

function PostContainer() {
  return (
    <div className={styles.postContainer}>
      <PostList />
      <PostForm />
    </div>
  )
}
export default PostContainer
