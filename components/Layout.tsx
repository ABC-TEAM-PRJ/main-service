import Head from 'next/head'
import Header from './common/Header'
import Footer from './common/Footer'

interface Props {
    children: React.ReactNode
}

  export default function Layout({ children }:Props) {
    return (
        <>         
            <Head>
                <title>집중</title>
            </Head>   
            <Header/>
            <main className='min-h-screen'>{children}</main>
            <Footer/>
        </>
    )
}
