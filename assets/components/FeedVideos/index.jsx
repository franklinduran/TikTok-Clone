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
        albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/5fe664f6f707b590b92c856604a62fba~c5_720x720.jpeg?x-expires=1645322400&x-signature=hyg6WY8ZkC4zeZqLZr5OdAWlOOg%3D',
        src: 'https://v16-webapp.tiktok.com/2697ae227626b108eced7d073d9b1661/621090be/video/tos/useast2a/tos-useast2a-pve-0068/d886515cfae848d480d3c34b97d28682/?a=1988&br=3544&bt=1772&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3pnnz7ThigJ9DXq&l=202202190039230101921592381193CFA3&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2s2Zmc6Zjt1OjMzNzczM0ApNGU4Nmc8NmVnN2Y5NzY2OWcwMzVvcjRvcWlgLS1kMTZzczBhLmEtLi0uYi9hMC9iMGA6Yw%3D%3D&vl=&vr='
    },
    {
        id: 2,
        author: 'franklin.php',
        likes: 365,
        shares: 190,
        comments: 389,
        songTitle: 'sonido original - franklin.php',
        albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/5fe664f6f707b590b92c856604a62fba~c5_720x720.jpeg?x-expires=1645322400&x-signature=hyg6WY8ZkC4zeZqLZr5OdAWlOOg%3D',
        description: 'Es hora de reir amigos... 😂😂😂 #aguacate #laloca #toxica #mongola #viral #fyp #parati #php',
        src: 'https://v16-webapp.tiktok.com/6389fa37a810bf274bb9c516aff30248/621090ef/video/tos/useast2a/tos-useast2a-ve-0068c004/f68da99fa1a64f22bd8e7cfe6f132e17/?a=1988&br=1762&bt=881&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3pnnz7ThigJ9DXq&l=202202190039230101921592381193CFA3&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2Zqc2Q6Zml5OzMzNzczM0ApPGZnNmgzaWQ7Nzw5ZDNnOmc0NXEucjRfLi1gLS1kMTZzczY1LTViXzIuYF8uXy00LS06Yw%3D%3D&vl=&vr='
    },
    {
        id: 3,
        author: 'franklin.php',
        description: 'Es hora de reir amigos... 😂😂😂 #aguacate #laloca #toxica #mongola #viral #fyp #parati #php',
        likes: 365,
        shares: 190,
        comments: 389,
        songTitle: 'sonido original - franklin.php',
        albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/5fe664f6f707b590b92c856604a62fba~c5_720x720.jpeg?x-expires=1645322400&x-signature=hyg6WY8ZkC4zeZqLZr5OdAWlOOg%3D',
        src: 'https://v16-webapp.tiktok.com/2697ae227626b108eced7d073d9b1661/621090be/video/tos/useast2a/tos-useast2a-pve-0068/d886515cfae848d480d3c34b97d28682/?a=1988&br=3544&bt=1772&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3pnnz7ThigJ9DXq&l=202202190039230101921592381193CFA3&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2s2Zmc6Zjt1OjMzNzczM0ApNGU4Nmc8NmVnN2Y5NzY2OWcwMzVvcjRvcWlgLS1kMTZzczBhLmEtLi0uYi9hMC9iMGA6Yw%3D%3D&vl=&vr='
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