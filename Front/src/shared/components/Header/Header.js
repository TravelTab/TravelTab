import styles from "./Header.module.css";

const Header = () => {
  let title = "not found";
  if (window.location.pathname === "/mytrip") title = "내 여행";
  if (window.location.pathname === "/mycard") title = "내 카드";
  if (window.location.pathname === "/exchangerate") title = "환율 정보";
  if (window.location.pathname === "/notice") title = "공지사항";
  if (window.location.pathname === "/profile") title = "프로필";
  function back() {
    alert("뒤로가기");
  }
  function quit() {
    alert("종료");
  }

  return (
    <div className="">
      <div className={styles.background_div}>
        <div className={styles.background} />
      </div>
      <div className={styles.left_arrow}>
        <img src="https://github.com/TravelTab/TravelTab/blob/main/Front/src/shared/components/Header/img/left_arrow.png" />
      </div>
      <div className={styles.x}>
        <img src="Front\src\shared\components\Header\img\x.png" />
      </div>
      <div className={styles.text_div}>
        <p className={styles.text}>{title}</p>
      </div>
    </div>
  );
};

export default Header;
