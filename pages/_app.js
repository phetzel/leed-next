import { useRef } from "react";

import "../styles/globals.css";
import "../styles/colors.css";
import Header from "../components/header/Header";
import ContactForm from "../components/contact-form/ContactForm";

function MyApp({ Component, pageProps }) {
  const footerRef = useRef();
  const scrollToRef = () => {
    console.log("hit");
    window.scroll({
      left: 0,
      top: footerRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="app">
      <Header onScroll={scrollToRef} />
      <Component {...pageProps} />
      <ContactForm reference={footerRef} />
    </div>
  );
}

export default MyApp;
