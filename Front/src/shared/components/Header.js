import Sidebar from "./Sidebar";

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
    alert("뒤로가기");
  }

  return (
    <div
      style={{
        width: "100%",
        height: "56px",
        background: "#91f6ba",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* 뒤로가기 버튼 */}
      <img
        style={{ width: "14px", height: "24px", marginLeft: "10px" }}
        src={
          !(window.location.pathname === "/main")
            ? "./img/MyTrip/Component 111_34.png"
            : "data:image/webp;base64,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"
        }
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
