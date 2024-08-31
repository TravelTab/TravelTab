const FirstPage = () => {
  return (
    <div className="relative w-[360px] h-[640px] bg-[#fff] overflow-hidden">
      <div className="absolute left-0 top-0 w-[360px] h-[640px] bg-[linear-gradient(180deg,#f2fffa_0%,#fff_100%)]"></div>
      <div className="absolute left-[-51px] top-[262px] w-[530px] h-[424px] bg-[linear-gradient(180deg,#f0ffd6_0%,#c5ffd5_100%)]"></div>
      <div className="absolute left-[12px] top-[32px] w-[336px] h-[104px] text-[43px] font-['Gmarket_Sans_TTF'] font-bold text-center">
        <span className="text-[#678c73]">
          여행지에서
          <br />
        </span>
        <span className="text-[#3c5255]">나의 ATM 찾기</span>
      </div>
      <div className="absolute left-[93px] top-[142px] w-[173px] h-[287px] flex">
        <img
          className="absolute left-[1px] top-[62px]"
          width="172"
          height="172"
          src="./img//FirstPage/traveltrip 116_48.png"
          alt="first"
        ></img>
        <div className="absolute -translate-x-1/2 left-1/2 top-[251px] text-[30px] leading-[120%] tracking-[-0.02em] font-['Gmarket_Sans_TTF'] font-bold text-[#000] whitespace-nowrap">
          Travel Tap
        </div>
      </div>
      <div className="absolute left-[85px] top-[445px] w-[190px] h-[170px] flex">
        <div className="absolute left-[4px] top-[98px] w-[182px] h-[72px] flex">
          <img
            className="absolute left-0 top-0"
            width="182"
            height="40"
            src="./img//FirstPage/Group 1618_45.png"
            alt="first"
          ></img>
          <div className="absolute -translate-x-1/2 left-1/2 top-[10px] text-[16px] leading-[120%] tracking-[-0.02em] font-['Noto_Sans_KR'] font-medium text-[#6b6b6b] whitespace-nowrap">
            로그인
          </div>
          <div className="absolute -translate-x-1/2 left-1/2 top-[56px] text-[13px] leading-[120%] tracking-[-0.02em] font-['Noto_Sans_KR'] font-medium text-[#6b6b6b] whitespace-nowrap">
            회원가입
          </div>
        </div>
        <div className="absolute left-0 top-0 w-[190px] h-[40px] flex">
          <img
            className="absolute left-0 top-0"
            width="190"
            height="40"
            src="./img//FirstPage/Group 1518_44.png"
            alt="first"
          ></img>
          <div className="absolute left-[11px] top-[10px] w-[142px] h-[17px] flex">
            <img
              className="absolute left-0 right-[88.73%] top-[5.88%] bottom-0"
              width="16"
              height="16"
              src="./img//FirstPage/Vector18_43.png"
              alt="first"
            ></img>
            <div className="absolute -translate-x-1/2 left-[calc(50%+17px)] top-0 text-[13px] leading-[120%] tracking-[-0.02em] font-['Noto_Sans_KR'] text-[#8e8e8e] whitespace-nowrap">
              이메일을 입력하세요
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-[49px] w-[190px] h-[40px] flex">
          <img
            className="absolute left-0 top-0"
            width="190"
            height="40"
            src="./img//FirstPage/Group 1523_45.png"
            alt="first"
          ></img>
          <div className="absolute left-[42px] top-[12px] w-[120px] h-[16px] flex">
            <div className="absolute -translate-x-1/2 left-1/2 top-0 text-[13px] leading-[120%] tracking-[-0.02em] font-['Noto_Sans_KR'] text-[#8e8e8e] whitespace-nowrap">
              비밀번호를 입력하세요
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute left-[26.39%] right-[69.17%] top-[78.44%] bottom-[18.28%]"
        width="16"
        height="21"
        src="./img//FirstPage/Vector23_53.png"
        alt="first"
      ></img>
    </div>
  );
};

export default FirstPage;
