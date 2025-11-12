import styles from './styles.module.css'

function Post({ title, text, id, avatar }) {
  return (
    <div className={styles.containerPost}>
      <img src={avatar} alt="avatar" className={styles.avatar} />
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <p>Id поста:{id}</p>
    </div>
  )
}
export default Post
