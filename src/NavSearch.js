import "./nav.css";

function NavSearch() {
  return (
    <div className="nav-search-bar">
      <input
        type="text"
        placeholder="검색어를 입력하세요..."
        className="search-input-box"
      />
      <img
        src="/images/nav-search.svg"
        alt="돋보기 이미지"
        className="search-img"
      />
    </div>
  );
}
export default NavSearch;
