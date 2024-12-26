// aosInitializer.js
import AOS from 'aos';
import 'aos/dist/aos.css';

export const initAOS = () => {
  AOS.init({
    duration: 1000, // Animation duration in milliseconds
    once: true, // Whether animation should happen only once - while scrolling down
    easing: 'ease-in-out', // Easing for animations
  });
};