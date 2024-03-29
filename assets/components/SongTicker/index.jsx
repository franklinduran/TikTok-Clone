import MusicIcon from "../Icons/MusicIcon"
import styles from './styles.module.css'
import Marquee from 'react-fast-marquee'

export default function SongTicker({songTitle}){
    return (
        <div className={styles.song}>
            <MusicIcon />
            <Marquee gradient={false} speed={100}>
                {songTitle}
            </Marquee>
        </div>
    )
}