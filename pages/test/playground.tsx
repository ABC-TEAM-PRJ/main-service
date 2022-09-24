import type { NextPage } from 'next'
import Layout from '../../components/Layout'
import Spinner from '../../components/Spinner'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())
/* 연습용 페이지 */
export default function Playground() {
    // const { data, error } = useSWR('/api/user/1', fetcher)
    // if (error) return <div>error...</div>
    // if (!data) return <Spinner />

    console.log(11111)
    return (
      <section>
        <h2>테스트 페이지 입니다.</h2>
        <p>
          여러가지 기능을 시험해봅시다.
        </p>
        <p>
          일단해봐.
        </p>
        <Section/>
      </section>
    )
  }
  
  Playground.getLayout = function getLayout(page: NextPage) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }

  function Section () {
    const { data, error } = useSWR('/api/user/1', fetcher)
    if (error) return <div>error...</div>
    if (!data) return <Spinner />
      return (
          <>
            <h2>데이터를 가져옴.</h2>
            <p>데이터 : {data.name}</p>
          </>
      )
  }