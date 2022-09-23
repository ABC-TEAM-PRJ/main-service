import type { NextPage } from 'next'
import Layout from '../components/Layout'

export default function About() {
    return (
      <section>
        <h2>집중이란?</h2>
        <p>
          집(아파트, 오피스텔, 상가, 건물 등등)을 위한
        </p>
        <p>
          부동산중개인을 찾을 수 있는 곳입니다.
        </p>
      </section>
    )
  }
  
  About.getLayout = function getLayout(page: NextPage) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }