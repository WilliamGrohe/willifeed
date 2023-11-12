import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img className={styles.avatar} src="https://www.github.com/williamgrohe.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>William Grohe</strong>
              <time title="12 de novembro às 00:08" dateTime="2023-11-12 00:08:32">Cerca de 1h atrás.</time>
            </div>

            <button title='Deletar comentário'>
                <Trash size={24}/>
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

          <footer>
            <button>
              <ThumbsUp />
              Apaludir <span>20</span>
            </button>
          </footer>
      </div>

    </div>
  )
}