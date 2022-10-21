import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

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
