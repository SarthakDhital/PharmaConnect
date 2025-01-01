import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
        offset: 200, // Offset from the top of the screen
        duration: 99999, // Animation duration
        delay: 100, // Delay before the animation starts
        easing: 'ease-in-out', // Easing function
        once: true, // Whether to animate only once
      });
      
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
