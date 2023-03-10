import '../styles/reset.css';
import '../styles/global.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/layouts/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
