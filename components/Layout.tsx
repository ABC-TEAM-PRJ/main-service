import Head from 'next/head'
import Header from './common/Header'
import Footer from './common/Footer'


  export default function Layout({ children }) {
    return (
        <>         
            <Head>
                <title>JipJung</title>
            </Head>   
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}
