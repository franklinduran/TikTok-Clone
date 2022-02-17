import React from 'react'
import VideoPlayer from '../VideoPlayer'
import styles from './styles.module.css'

const VIDEOS = [
    {
        id: 1,
        author: 'franklin.php',
        description: 'Es hora de reir amigos... 😂😂😂 #aguacate #laloca #toxica #mongola #viral #fyp #parati #php',
        likes: 365,
        shares: 190,
        comments: 389,
        songTitle: 'sonido original - franklin.php',
        albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/da41c000878b9af3637fbfeaa0d63b9f~c5_720x720.jpeg?x-expires=1645153200&x-signature=i%2BNXL3HOWngQ19BBwBD5qjKomdA%3D',
        src: 'https://v16-webapp.tiktok.com/1b5b68932d5704f4533d4d7c5a4b07ed/620e096c/video/tos/useast2a/tos-useast2a-ve-0068c004/471533da32bc467398008286ba438b93/?a=1988&br=5376&bt=2688&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3pnnz7Th2M2EDXq&l=202202170236270102230981710F010C3F&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anlrdzU6ZnZ0OjMzNzczM0ApNWk3NTk3NWQ5N2QzOWdlM2cybC5wcjRvcDBgLS1kMTZzcy4xMzRiLTQzMzQyX2NeXy06Yw%3D%3D&vl=&vr='
    },
    {
        id: 2,
        author: 'franklin.php',
        likes: 365,
        shares: 190,
        comments: 389,
        songTitle: 'sonido original - franklin.php',
        albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/da41c000878b9af3637fbfeaa0d63b9f~c5_720x720.jpeg?x-expires=1645153200&x-signature=i%2BNXL3HOWngQ19BBwBD5qjKomdA%3D',
        description: 'Es hora de reir amigos... 😂😂😂 #aguacate #laloca #toxica #mongola #viral #fyp #parati #php',
        src: 'https://v16-webapp.tiktok.com/d73e06e92fd647386db1ac1aaf911856/620e0e71/video/tos/useast2a/tos-useast2a-pve-0068/8c1bdf430e4744f18fb86e64718d97f2/?a=1988&br=2514&bt=1257&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3pnnz7Th7q2EDXq&l=202202170256290101910352110600F738&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajZmdTQ6Znl2OTMzNzczM0ApMzUzOjU2Mzs3N2U2NmQ6OGdkY2BicjRfLXFgLS1kMTZzczI2LS02NS8uL2MwL2A2Li06Yw%3D%3D&vl=&vr='
    }
]

function FeedVideos() {
  return (
    VIDEOS.map(video =>{
        return (
            <div className={styles.item} key={video.id}>
                <VideoPlayer {...video}/>
            </div>
        )
    })
  )
}

export default FeedVideos