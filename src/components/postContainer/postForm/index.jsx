import { useForm } from 'react-hook-form'
import axios from 'axios'
import styles from './styles.module.css'

function PostForm() {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = async (data) => {
    const postData = {
      title: data.title,
      text: data.text,
    }
    try {
      const response = await axios.post(
        'https://691226ca52a60f10c820ce49.mockapi.io/posts',
        postData
      )

      console.log('Пост успешно создан:', response.data)
      reset()
    } catch (error) {
      console.error('Ошибка при отправке:', error)
    }
  }

  return (
    <div className={styles.formContainer}>
      <h2>Написать пост</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Заголовок</label>
          <input
            type="text"
            placeholder="Заголовок"
            {...register('title', { required: true })}
          />
        </div>
        <div>
          <label>Текст поста</label>
          <textarea
            placeholder="Введите текст..."
            {...register('text', { required: true })}
          ></textarea>
        </div>
        <button type="submit">Публикация</button>
      </form>
    </div>
  )
}
export default PostForm
