import ky from 'ky-universal'
import { useQuery } from '@tanstack/react-query'

const fetchPosts = async (limit = 10) => {
    const parsed = await ky('https://jsonplaceholder.typicode.com/posts').json()
    const result = parsed.filter((x:any) => x.id <= limit)
    return result
}

const usePosts:any = (limit:any) => {
    return useQuery(['posts', limit], () => fetchPosts(limit))
}

export { usePosts, fetchPosts }
