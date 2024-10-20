import Head from "next/head";
import localFont from "next/font/local";
import HomeUi from "./Components/Home/HomeUi";
import LeftSlide from "./Components/LeftSlide/LeftSlide";
import RightSlide from "./Components/RightSlide/RightSlide";
// import LoginPage from "./Components/Login/Login";
import styles from "../pages/index.module.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>DropShop - Online mini store</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.mainContainer}`}>
        <LeftSlide />
        <HomeUi />
        <RightSlide />
        {/* <LoginPage /> */}
      </div>
    </>
  );
}
