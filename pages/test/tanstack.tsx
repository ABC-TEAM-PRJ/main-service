import React, { useState } from 'react'
import { usePosts } from '../hooks/usePost'

/**
 *
 * https://tanstack.com/query/v4/docs/quick-start
 *
 * Queries
 * Mutations
 * Query Invalidation
 *
 * */

const tanstack = () => {
    /**
     * useQuery(고유 키, 함수)
     * 고유키: refetching, caching, sharing 때 사용
     *
     * useQuery 결과값: isLoading, isError(props: error), isSuccess(props: data) 상태값을 가진다
     *                 status===loading status===error로 대치해 사용할 수 있다
     *                 fetchStatus===fetching fetchStatus===paused fetchStatus === idle
     *
     *  쿼리가 변수에 의존하고 있다면, 해당 변수를 같이 적어줘야 한다
     *  ex) useQuery(['todos', todoId], () => fetchTodoById(todoId))
     * */

    /**
     * Mutaion (Create, Update, Delete) 기능 구현 시 사용
     *
     * isIdle or status === idle
     * isLoading or status === loading
     * isError(props:error) or status === error
     * isSuccess(props: data) or status === success
     *
     * mutation.reset(): error나 data를 초기화해야 할 때
     * mutation.mutate(): mutation을 실행하는 함수
     *
     * useMutation
     * mutate는 연속 함수의 경우 매번 관찰자가 제거되고 다시 실행되어서 마운트 상태일때만 동작하지만
     * useMutation의 경우 각 mutate호출에 실행된다, 때문에 비동기적 실행이 이루어진다
     *
     * mutation.mutateAsync: mutate 대신 mutateAsync를 사용해서 프로미스를 얻을 수 있다
     *
     * */

    /**
     * Query Invalidation
     * queryClient.invalidateQueries() : 쿼리가 오래되었음을 표시하고 잠재적으로 refetch 시켜준다
     *
     * staleTime: 시간이 얼마 흐른뒤에 stale 취급할 것인지
     * */

    // const query = useQuery(['todos'], getTodos)
    // const mutation = useMutation(newTodo => {
    //     // return axios.post('/todos', newTodo)
    //     return ''
    // })
    const [postCount, setPostCount] = useState(10)
    const { data, isLoading, isFetching } = usePosts(postCount)

    if (isLoading) return <div>Loading</div>

    return(
        <>
            <ul>
                {data?.map((post:any, index:any) => (
                    <li key={post.id}>
                        <div>
                            <span>{index + 1}. </span>
                            <a href="#">{post.title}</a>
                        </div>
                    </li>
                ))}
            </ul>
            {postCount <= 90 && (
                <button
                    onClick={() => setPostCount(postCount + 10)}
                    disabled={isFetching}
                >
                    {isFetching ? 'Loading...' : 'Show More'}
                </button>
            )}
        </>
    )
}

export default tanstack