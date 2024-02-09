import MainLayout from '@/components/MainLayout'
import 'bootstrap/dist/css/bootstrap.css'

export default function App({ Component, pageProps }) {
  return <MainLayout> <Component {...pageProps} /> </MainLayout> 
}
