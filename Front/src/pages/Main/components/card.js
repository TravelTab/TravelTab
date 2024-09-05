const card = (props) => {
  return (
    <div>
      {/* 박스 */}
      <div className="absolute -translate-x-1/2 left-1/2 w-[240px] h-[180px]">
        <img
          width="219"
          height="138"
          src={props.img_url}
          style={{ display: "block", margin: "auto", marginTop: "20px" }} // 이미지 가운데 정렬
        ></img>
      </div>
    </div>
  );
};

export default card;
