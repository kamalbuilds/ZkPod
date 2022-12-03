import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AuthContextProvider from '../context/AuthContext'
import Navbar from '../compoponent/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return <AuthContextProvider>
    <Navbar/>
    <Component {...pageProps} />
    </AuthContextProvider>
}
