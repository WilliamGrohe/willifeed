import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({content, onDeleteComment}) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment(){
    onDeleteComment(content)
  }

  function handleLikeComment(){
    setLikeCount(likeCount + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://www.github.com/williamgrohe.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>William Grohe</strong>
              <time title="12 de novembro às 00:08" dateTime="2023-11-12 00:08:32">Cerca de 1h atrás.</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
                <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

          <footer>
            <button onClick={handleLikeComment}>
              <ThumbsUp />
              Apaludir <span>{likeCount}</span>
            </button>
          </footer>
      </div>

    </div>
  )
}