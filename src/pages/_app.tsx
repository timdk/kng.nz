import { AppPropsWithLayout } from '@/types/page'

import '@/styles/global.scss'

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(<Component {...pageProps} />)
}
