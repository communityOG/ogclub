import '@/styles/globals.css'
import Layout from './layout'
import Ticker from "@/components/Main/Ticker";


export default function App({ Component, pageProps }) {
  return (
    <Layout >
      <Ticker message="OGCLUB is acquired by Brinc and is now VentureVerse." />
      <Component {...pageProps} />
    </Layout>
  )
}
