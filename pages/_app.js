import { useRef } from "react";
import { useRouter } from "next/router";

import "../styles/globals.css";
import "../styles/colors.css";
import Header from "../components/header/Header";
import ContactContainer from "../components/contact-form/ContactContainer";

function MyApp({ Component, pageProps }) {
  const { route } = useRouter();
  // console.log(router);
  const footerRef = useRef();
  const scrollToRef = () => {
    if (route != "/admin") {
      window.scroll({
        left: 0,
        top: footerRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="app">
      <Header onScroll={scrollToRef} />
      <Component {...pageProps} />
      {route != "/admin" && <ContactContainer reference={footerRef} />}
    </div>
  );
}

export default MyApp;
