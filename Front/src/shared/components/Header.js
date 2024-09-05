import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let title = "not found";
  if (window.location.pathname === "/mytrip") title = "내 여행";
  if (window.location.pathname === "/mycard") title = "내 카드";
  if (window.location.pathname === "/exchangerate") title = "환율 정보";
  if (window.location.pathname === "/notice") title = "공지사항";
  if (window.location.pathname === "/profile") title = "프로필";
  if (window.location.pathname === "/profileedit") title = "프로필";
  if (window.location.pathname === "/main") title = "TravelTap";
  function back() {
    navigate("/main");
  }
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        height: "56px",
        background: "#91f6ba",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* 뒤로가기 버튼 */}
      <img
        style={{ width: "14px", height: "24px", marginLeft: "10px" }}
        src="./img/MyTrip/Component 111_34.png"
        onClick={back}
      ></img>

      <div className="absolute -translate-x-1/2 left-1/2 top-[16px] text-[20px] leading-[120%] tracking-[-0.02em] font-['Noto_Sans_KR'] font-semibold text-[#000] text-center whitespace-nowrap">
        {title}
      </div>
      <Sidebar />
    </div>
  );
};

export default Header;
