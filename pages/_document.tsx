import { Html, Head, Main, NextScript } from 'next/document'
import Nav from '../components/common/Header'
import Footer from '../components/common/Footer'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script 
          id="naver-id-login-js"
          src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"
          strategy="beforeInteractive"
        ></Script>
      </body>
    </Html>
  )
}