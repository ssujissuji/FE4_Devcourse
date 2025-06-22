type HeaderProps = {
  menuItems: string[];
};

export default async function Header({ menuItems }: HeaderProps) {
  return (
    <header className="header">
      <a href="#">
        <h1 className="header__logo">Wave</h1>
      </a>
      <ul className="header__navi">
        {menuItems.map((menu) => (
          <li key={menu}>
            <a href="#">{menu}</a>
          </li>
        ))}
      </ul>
      <div className="header-search">
        <input
          type="text"
          className="header-search__input"
          placeholder="제목으로 찾아보세요."
        />
        <span className="material-symbols-outlined icon"> search </span>
      </div>
    </header>
  );
}
