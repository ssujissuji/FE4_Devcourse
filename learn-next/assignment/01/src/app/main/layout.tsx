import "@/app/globals.css";
import Header from "../components/common/header";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html>
        <body>
          <Header menuItems={["상영중", "인기작", "개봉예정"]} />
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
