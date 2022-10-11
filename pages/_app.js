import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.scss';

config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Elliot Maisl</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="elliot maisl portfolio"/>
        <meta name="description" content="Elliot Maisl's development portfolio"/>
        <meta name="author" content="Elliot Maisl"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="English"/>

        <meta property="og:title" content="Elliot Maisl"/>
        <meta property="og:description" content="Elliot Maisl's development portfolio"/>
        <meta property="og:image" content="https://elliotmaisl.com/images/elliotmaisl.png"/>
        <meta property="og:url" content="https://elliotmaisl.com"/>
        <meta property="og:site_name" content="Elliot Maisl"/>
        <meta property="og:type" content="website"/>
        <meta property="og:locale" content="en_US"/>

        {/* Set the color metadata website attribute to our yellow */}
        <meta name="theme-color" content="#eab308" />
      </Head>

      <div className="bg-gray-50 text-gray-800">
        <Navbar />
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow mt-2 mb-10">
            <div className="w-full pt-20 px-4 text-md leading-normal">
              <Component {...pageProps} />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};
