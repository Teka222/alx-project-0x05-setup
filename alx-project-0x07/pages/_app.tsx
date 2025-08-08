// pages/_app.tsx
import type { AppProps } from 'next/app';
import Layout from '../components/layouts/Layout';
import '../styles/globals.css'; // Import global styles (if you have any)

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

