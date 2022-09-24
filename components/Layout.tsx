import Head from 'next/head'
import Header from './common/Header'
import Footer from './common/Footer'


  export default function Layout({ children }) {
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
