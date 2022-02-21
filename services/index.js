import {supabase} from './supabase'

const prefix = import.meta.env.VITE_SUPABASE_STORAGE_URL

export const uploadVideo = async ({videoFile}) => {
    const filename = window.crypto.randomUUID()
    const {data,error} = await supabase.storage
    .from('videos')
    .upload(`uploads/${filename}.mp4`, videoFile)

    const file = data?.Key ? `${prefix}${data.Key}` : ''

    return [error, file]
}

export const publishVideo = async ({videoSrc, description}) => {
    const defaultAlbum = 'https://static.platzi.com/media/avatars/avatars/xternium_77c70169-69fc-40a7-a829-513414440799.jpg'
    const defaultSong = 'franklin.php songs'
    const {data,error} = await supabase
    .from('videos')
    .insert([
        {
            user_id:'bf4aa8d4-6fb1-4d37-9634-4663a824cffa', 
            description,
            albumCover:defaultAlbum,
            songTitle:defaultSong,
            src:videoSrc
        }
    ])

    return [error, data]
}

export const getVideos = async () => {
    const { data: data, error } = await supabase
    .from('videos')
    .select(`
        *,
        user:user_id (
            avatar,
            username,
            id
        )
    `)
    .order('created_at', {ascending: false})

    return [error, data]
}