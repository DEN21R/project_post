import PostForm from './postForm'
import styles from './styles.module.css'

function PostContainer() {
  return (
    <div className={styles.postContainer}>
      <PostForm />
    </div>
  )
}
export default PostContainer
