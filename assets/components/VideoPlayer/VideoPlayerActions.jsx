import React from 'react'
import { Heart } from '../Icons/Heart'
import { Comment } from '../Icons/Comment'
import { Share } from '../Icons/Share'
import styles from './styles.module.css'

function VideoPlayerActions({username, avatar, likes=876, comments=567, shares=389, hearted=false}) {

  const handleLike = () => {
    alert("L")
  }

  const handleComment = () => {
    alert("C")
  }

  const handleShare = () => {
    alert("S")
  }

  return (
      <aside className={styles.actions}>

        <div className={styles.user}>
          <img alt={username} src={avatar}/>
          <img src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web-us/tiktok/web/node/_next/static/images/test-2e6dd40439e72f09a8193e27cb3e0c51.svg" width="24"/>
        </div>

        <button onClick={handleLike} className={styles.action}>
            <Heart />
            <span title='likes'>{likes}</span>
        </button>

        <button onClick={handleComment} className={styles.action}>
            <Comment />
            <span title='comments'>{comments}</span>
        </button>

        <button onClick={handleShare} className={styles.action}>
            <Share />
            <span title='shares'>{shares}</span>
        </button>

      </aside>
  )
}

export default VideoPlayerActions