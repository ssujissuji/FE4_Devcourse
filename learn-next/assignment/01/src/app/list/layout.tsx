import "@/app/globals.css";
import Header from "../components/common/header";
import Navbar from "../components/common/navbar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html>
        <body>
          <Header menuItems={["홈", "카테고리", "Movie", "TV"]} />
          <Navbar />
          {children}
        </body>
      </html>
    </>
  );
}
