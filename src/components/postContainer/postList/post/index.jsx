import styles from './styles.module.css'

function Post({ title, text, id, avatar, onDelete }) {
  return (
    <div className={styles.containerPost}>
      <img src={avatar} alt="avatar" className={styles.avatar} />

      <span className={styles.divider} />

      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>

      <p>Id поста:{id}</p>

      <button onClick={() => onDelete(id)}>Удалить</button>
    </div>
  )
}
export default Post
