import React from 'react'
import AlbumDisk from './AlbumDisk'
import SongTicker from '../SongTicker'
import styles from './styles.module.css'

function VideoDescription({username, description, albumCover, songTitle}) {
  return (
    <footer className={styles.description}>
        <div className={styles.textWrapper}>
          <section>
            <strong>
              <a className={styles.username}>@{username}</a>
            </strong>
            <p className={styles.text}>{description}</p>
          </section>
            <SongTicker songTitle={songTitle}/>
        </div>
        <div>
            <AlbumDisk albumCover={albumCover}/>
        </div>
    </footer>
  )
}

export default VideoDescription