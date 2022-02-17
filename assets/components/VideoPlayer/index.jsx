import clsx from "clsx"
import { useRef, useState } from "react"
import styles from "./styles.module.css"

const SRC = 'https://v16-webapp.tiktok.com/bf48f7a7617d05e1da077f86acf54301/620cadbd/video/tos/useast2a/tos-useast2a-ve-0068c003/e789a3cbc3984b2793c9ec308c0e37d5/?a=1988&br=1556&bt=778&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3pnnz7ThkxwEDXq&l=2022021601540401022309914318884459&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3Z0Z2g6Zm04OTMzNzczM0ApZmc7NWZmOmU4N2U2NWlpOmdtbDU0cjQwZWlgLS1kMTZzczU0Y2MxYTQuNS5eLV8yYGA6Yw%3D%3D&vl=&vr='

export default function VideoPlayer () {

    const [playing, setPlaying] = useState(false)

    const video = useRef(null)

    const handlePlay = () => {

        const {current: videoEl} = video
        playing
            ? videoEl.pause()
            : videoEl.play()

        setPlaying(!playing)

    }

    const playerClassName = clsx(styles.player, {
        [ styles.hidden ]: playing
    })

    return (
        <div>
            <video
                className={styles.video}
                src={SRC}
                controls={false}
                ref={video}
                onClick={handlePlay}
            />
            <i className={playerClassName.player} />
        </div>
    )
}