import "../styles/globals.css";
import "../styles/colors.css";
import Header from "../components/header/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
