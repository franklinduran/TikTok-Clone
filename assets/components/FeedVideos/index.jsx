import React, { useEffect, useState } from 'react'
import VideoPlayer from '../VideoPlayer'
import styles from './styles.module.css'
import { getVideos } from '../../../services/index.js'

function FeedVideos() {

    const [videos, setVideos] = useState([])
    const [error, setError] = useState(null)

    useEffect(()=>{
        getVideos().then(([error, videos]) => {
            if(error) return setError(error)
            setVideos(videos)
        })
    },[])

    if (error) {
        return (
            <span>{error}</span>
        )
    }

    return (
        videos.map(video =>{
            const {user = {}} = video
            const {avatar, username} = user
            return (
                <div className={styles.item} key={video.id}>
                    <VideoPlayer {...video} avatar={avatar} username={username}/>
                </div>
            )
        })
    )
}

export default FeedVideos