import { AppProps } from 'next/app'

import '@exampledev/new.css/new.css';
import '@fontsource/inter';
import '@/styles/global.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
