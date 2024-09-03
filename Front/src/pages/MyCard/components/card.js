const Card = () => {
  return (
    <div>
      <div className="absolute -translate-x-1/2 left-1/2 top-[96px] text-[20px] font-['Inter'] font-semibold text-[#000] whitespace-nowrap">
        트래블로그 체크 카드 (0828)
      </div>
      {/* 박스 */}
      <div className="absolute -translate-x-1/2 left-1/2 top-[151px] w-[275px] h-[362px] bg-[#fff] rounded-[10px] shadow-[0_4px_9px_-1px_#00000059]">
        <img
          width="219"
          height="138"
          src="./img/MyCard/트래블로그 29_204.png"
          style={{ display: "block", margin: "auto", marginTop: "20px" }} // 이미지 가운데 정렬
        ></img>
        <img
          style={{
            marginLeft: "130px",
            marginTop: "10px", // 이미지와 다른 콘텐츠 사이의 간격 조정
          }}
          width="24"
          height="24"
          src="./img/MyCard/Add card9_221.png"
          onClick={() => alert("카드추가")}
        ></img>
        <div style={{ marginLeft: "20px" }}>
          <div
            style={{
              fontSize: "16px",
              lineHeight: "120%",
              letterSpacing: "-0.02em",
              fontFamily: "Inter",
              fontWeight: "600",
              color: "#409aa6",
              whiteSpace: "nowrap",
            }}
          >
            혜택
          </div>
          <div>
            {/* className="absolute left-[70px] top-[355px] text-[16px] leading-[120%] tracking-[-0.02em] font-['Inter'] text-[#494949] whitespace-nowrap"> */}
            연회비 없음
            <br />
            해외 이용 수수료 면제
            <br />
            주요 통화 환전시 환율 100% 우대
          </div>

          <div
            style={{
              fontSize: "16px",
              lineHeight: "120%",
              letterSpacing: "-0.02em",
              fontFamily: "Inter, sans-serif", // 'Inter' 폰트가 없을 경우를 대비해 fallback 폰트를 추가합니다.
              fontWeight: "600", // 'font-semibold'는 600으로 설정합니다.
              color: "#409aa6",
              whiteSpace: "nowrap",
            }}
          >
            <br />
            지원 통화
          </div>
          <div>미국, 일본, 기타, 등등</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
