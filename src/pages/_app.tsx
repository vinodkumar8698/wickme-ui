import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react';
import NavbarComp from '@/Components/Navbar/NavbarComp';
import Footer from '@/Components/Footer/Footer';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (<>
    <NavbarComp />
   <Component {...pageProps} />
   <Footer />
 </>)
}
