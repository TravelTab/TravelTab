const Card = (props) => {
  return (
    <div>
      <div className="absolute -translate-x-1/2 left-1/2 top-[96px] text-[20px] font-['Inter'] font-semibold text-[#000] whitespace-nowrap">
        {props.card_name}
      </div>
      {/* 박스 */}
      <div className="absolute -translate-x-1/2 left-1/2 top-[151px] w-[275px] h-[362px] bg-[#fff] rounded-[10px] shadow-[0_4px_9px_-1px_#00000059]">
        <img
          width="219"
          height="138"
          src={props.img_url}
          style={{ display: "block", margin: "auto", marginTop: "20px" }} // 이미지 가운데 정렬
        ></img>
        <img
          style={{
            marginLeft: "130px",
            marginTop: "10px", // 이미지와 다른 콘텐츠 사이의 간격 조정
          }}
          width="24"
          height="24"
          src="./img/MyCard/Addcard9_221.png"
          onClick={() => alert("카드추가")}
        ></img>
        <div style={{ marginLeft: "20px", textAlign: "left" }}>
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
          <div dangerouslySetInnerHTML={{ __html: props.advantage }}></div>

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
          <div>{props.current}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
