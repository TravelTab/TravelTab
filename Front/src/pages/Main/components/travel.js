const travel = (props) => {
  return (
    <div>
      {/* 박스 */}
      <div className="absolute -translate-x-1/2 left-1/2 w-[240px] h-[140px] top-[-5px]">
      <div className="main-travel-title"><sapen>{props.cur}</sapen></div>
      <div className="main-travel-main"><sapen>{props.rate}</sapen></div>
        <img
          width="219"
          height="139"
          src={props.img_url}
          style={{ display: "block", margin: "auto", marginTop: "20px", height:"100px", borderRadius: '5px'}} // 이미지 가운데 정렬
        ></img>
      </div>
    </div>
  );
};

export default travel;
