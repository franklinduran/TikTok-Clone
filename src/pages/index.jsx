import styles from './styles.module.css'
import { useDropzone } from 'react-dropzone'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { publishVideo, uploadVideo } from '../../services'

export default function Upload () {
    const [uploading, setUploading] = useState(false)
    const [uploaded, setUploaded] = useState(null)

    const onDrop = async (files) => {
        const [file] = files
        setUploading(true)
        const [error, fileUrl] = await uploadVideo({videoFile: file})
        if (error) console.error(error)
        setUploaded(fileUrl)
    }

    const {getRootProps, getInputProps, isDragAccept, isDragReject} = useDropzone({
        onDrop,
        maxFiles: 1,
        disabled: uploading || uploaded,
        accept: 'video/mp4,video/x-m4v,video/*'
        }
    )

    useEffect(() => {
        if (isDragReject) navigator.vibrate(100)
    }, [isDragReject]);

    const dndClassNames = clsx(styles.dnd, {
        [styles.dndReject]: isDragReject,
        [styles.uploaded]: uploaded,
        [styles.uploading && !styles.uploaded]: uploading,
        [styles.dndAccept]: isDragAccept
    })

    const renderDndContent = () => {
        if(uploaded) return <h4>¡Archivo cargado con éxito!</h4>
        if(uploading) return <h4>Subiendo archivo...</h4>
        if(isDragReject) return <h4>Archivo no soportado</h4>
        if(isDragAccept) return <h4>¡Suelta el archivo para subir!</h4>
        return <>
            <h4>Selecciona el video para cargar</h4>
            <h5>O arrastra y suelta un archivo</h5>
            <div>
                <div>MP4 o WebM</div>
                <div>Resolución de al menos 720x1280</div>
                <div>Hasta 180 segundos</div>
                <div>Menos de 1&nbsp;GB</div>
            </div>
        </>
    }
    
    const handleSubmit = async evt => {
        evt.preventDefault()
        if(!uploaded) return
        const description = evt.target.description.value
        const [error] = await publishVideo({videoSrc: uploaded, description})
        if(error) return console.error(error)
        else console.log('video publicado')
    }

    return (
        <div className={styles.upload}>
            <h1>Cargar video</h1>
            <p>El video se publicará en el perfil de @franklin.php</p>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div {...getRootProps()}>
                    <input {...getInputProps()}/>
                    <div className={dndClassNames}>
                        <img src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-us/ies/creator_center/svgs/cloud-icon1.ecf0bf2b.svg" width='49' />
                        {renderDndContent()}
                    </div>
                </div>
                <label>leyenda</label>
                <input name='description' placeholder=''/>
                <button>
                    Publicar
                </button>
            </form>
        </div>
    )
}