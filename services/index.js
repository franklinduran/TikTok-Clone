import {supabase} from './supabase'

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

    return [error, data]
}