import Image from "next/image";

export default async function Navbar() {
  return (
    <>
      <nav className="navigator">
        <ul className="navigator-list">
          <li className="navigator-list__item">
            <Image src="/assets/home.png" alt="" width={16} height={18} />
            <strong className="navigator-list__txt">메인</strong>
          </li>
          <li className="navigator-list__item">
            <Image
              src="/public/assets/live.png"
              alt=""
              width={16}
              height={18}
            />
            <strong className="navigator-list__txt">상영중</strong>
          </li>
          <li className="navigator-list__item">
            <Image
              src="/public/assets/popluar.png"
              alt=""
              width={16}
              height={18}
            />
            <strong className="navigator-list__txt">인기작</strong>
          </li>

          <li className="navigator-list__item">
            <Image
              src="/public/assets/search.png"
              alt=""
              width={16}
              height={18}
            />
            <strong className="navigator-list__txt">개봉예정</strong>
          </li>
          <li className="navigator-list__item">
            <Image
              src="/assets/icons/search.png"
              alt=""
              width={16}
              height={18}
            />
            <strong className="navigator-list__txt">검색</strong>
          </li>
        </ul>
      </nav>
    </>
  );
}
