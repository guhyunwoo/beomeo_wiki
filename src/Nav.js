import "./nav.css";
import NavContents from "./NavContents";
import NavSearch from "./NavSearch";

function Nav() {
  return (
    <div className="nav">
      <a href="./">
        <img src="/images/logo.svg" className="nav-logo" alt="로고 이미지" />
      </a>
      <NavContents />
      <a href="/" className="nav-suffle">
        <img src="/images/nav-shuffle.svg" alt="셔플 이미지" />
      </a>
      <NavSearch />
      <a href="/" className="nav-document">
        <img
          src="/images/nav-document-button.svg"
          alt="문서 생성 버튼 이미지"
        />
      </a>
      <a href="/" className="nav-profile">
        <img src="/images/nav-profile.svg" alt="사람 이미지" />
      </a>
    </div>
  );
}

export default Nav;
