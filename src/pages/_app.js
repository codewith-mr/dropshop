import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./Components/context/AuthContext";
import "@/styles/globals.css";
import { ProductProvider } from "./Components/context/ProductContext";
import { useEffect } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <AuthProvider>
      <ProductProvider>
        <Component {...pageProps} />;
      </ProductProvider>
    </AuthProvider>
  );
}
