import Header from "./components/common/header";
import Navbar from "./components/common/navbar";
import "./globals.css";
import Main from "./main/page";

export default async function Home() {
  return (
    <>
      <Header menuItems={["상영중", "인기작", "개봉예정"]} />
      <Navbar />
      <Main />
    </>
  );
}
