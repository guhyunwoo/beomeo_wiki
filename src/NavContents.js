import "./nav.css";

function NavContents() {
  return (
    <div className="nav-contents">
      <a href="/student">
        <img src="/images/nav-student.svg" alt="사람 이미지" />
      </a>
      <a href="/accident">
        <img src="/images/nav-accident.svg" alt="라바콘 이미지" />
      </a>
      <a href="/club">
        <img src="/images/nav-club.svg" alt="사람 두명이 서있는 이미지" />
      </a>
      <a href="/frame">
        <img
          src="/images/nav-frame.svg"
          alt="해시태그 모양 이미지"
          className="nav-frame-img"
        />
      </a>
    </div>
  );
}

export default NavContents;
