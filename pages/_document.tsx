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
      </body>
    </Html>
  )
}