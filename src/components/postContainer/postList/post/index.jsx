import styles from './styles.module.css'

function Post({ title, text, id, avatar, onDelete }) {
  return (
    <div className={styles.containerPost}>
      <img src={avatar} alt="avatar" className={styles.avatar} />

      <span className={styles.divider} />

      <div>
        <h4 className={styles.postTitle}>{title}</h4>
        <p className={styles.postText}>{text}</p>
      </div>

      <div>
        <p className={styles.postId}>Id поста: {id}</p>
        <button onClick={() => onDelete(id)} className={styles.postButton}>
          Удалить
        </button>
      </div>
    </div>
  )
}
export default Post
