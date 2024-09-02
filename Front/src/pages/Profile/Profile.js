import { useNavigate } from "react-router-dom";
import DisplaySetting from "../../shared/DisplaySetting";
import Header from "../../shared/components/Header";

const Profile = () => {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate('./Profile.js'); // 버튼 클릭 시 연결되는 주소
  };

	return (<DisplaySetting>

  <div className="absolute left-0 top-0 w-[360px] h-[640px] bg-[linear-gradient(180deg,#f4fffb_0%,#fff_100%)]"></div>
  <Header/>
  <div className="absolute -translate-x-1/2 left-1/2 top-[80px] w-[196px] h-[196px] bg-[#d9d9d9] rounded-full shadow-[0_4px_4px_14px_#ffffff4d]"></div>
  <div className="absolute -translate-x-1/2 left-1/2 top-[288px] text-[20px] leading-[120%] tracking-[-0.02em] font-['Inter'] font-semibold text-[#000] text-center whitespace-nowrap">김토뱅</div>
  <div className="absolute -translate-x-1/2 left-1/2 top-[16px] text-[20px] leading-[120%] tracking-[-0.02em] font-['Noto_Sans_KR'] font-semibold text-[#000] text-center whitespace-nowrap">프로필</div>
  <div className="absolute left-[39px] top-[363px] w-[281px] h-[32px] flex">
    <div className="absolute left-0 top-0 w-[281px] h-[32px] bg-[#efefef] rounded-[9px]"></div>
    <div className="absolute left-[32px] top-[6px] text-[16px] leading-[120%] tracking-[-0.02em] font-['Inter'] text-[#494949] whitespace-nowrap">이름</div>
    <div className="absolute left-[217px] top-[6px] text-[16px] leading-[120%] tracking-[-0.02em] font-['Inter'] text-[#727272] whitespace-nowrap">김토뱅</div>
    <div className="absolute left-[217px] top-[6px] text-[16px] leading-[120%] tracking-[-0.02em] font-['Inter'] text-[#727272] whitespace-nowrap">김토뱅</div>
    <img className="absolute left-[3.56%] right-[90.75%] top-[25%] bottom-[25%]" width="16" height="16" src="./img/Profile/Vector6_224.png"></img>
  </div>
  <div className="absolute left-[39px] top-[408px] w-[281px] h-[32px] flex">
    <div className="absolute left-0 top-0 w-[281px] h-[32px] bg-[#efefef] rounded-[9px]"></div>
    <img className="absolute left-[3.56%] right-[91.46%] top-[28.12%] bottom-[28.12%]" width="14" height="14" src="./img/Profile/Vector6_353.png"></img>
    <div className="absolute left-[32px] top-[6px] text-[16px] leading-[120%] tracking-[-0.02em] font-['Inter'] text-[#494949] whitespace-nowrap">전화번호</div>
    <div className="absolute left-[147px] top-[6px] text-[16px] leading-[120%] tracking-[-0.02em] font-['Inter'] text-[#727272] whitespace-nowrap">010-1004-1004</div>
  </div>
  <div className="absolute left-[39px] top-[453px] w-[281px] h-[32px] flex">
    <div className="absolute left-0 top-0 w-[281px] h-[32px] bg-[#efefef] rounded-[9px]"></div>
    <div className="absolute left-[32px] top-[6px] text-[16px] leading-[120%] tracking-[-0.02em] font-['Inter'] text-[#494949] whitespace-nowrap">이메일</div>
    <div className="absolute left-[115px] top-[6px] text-[16px] leading-[120%] tracking-[-0.02em] font-['Inter'] text-[#727272] whitespace-nowrap">imemail@naver.com</div>
    <img className="absolute left-[3.2%] right-[90.75%] top-[28.12%] bottom-[28.12%]" width="17" height="14" src="./img/Profile/Vector6_356.png"></img>
  </div>
  <div className="absolute left-[39px] top-[498px] w-[281px] h-[32px] flex">
    <div className="absolute left-0 top-0 w-[281px] h-[32px] bg-[#efefef] rounded-[9px]"></div>
    <div className="absolute left-[32px] top-[6px] text-[16px] leading-[120%] tracking-[-0.02em] font-['Inter'] text-[#494949] whitespace-nowrap">집 주소</div>
    <div className="absolute left-[93px] top-[6px] text-[16px] leading-[120%] tracking-[-0.02em] font-['Inter'] text-[#727272] whitespace-nowrap">서울특별시 한경 아카데미</div>
    <img className="absolute left-[3.56%] right-[90.75%] top-[28.12%] bottom-[28.12%]" width="16" height="14" src="./img/Profile/Vector6_359.png"></img>
  </div>
  <div className="absolute left-[39px] top-[543px] w-[281px] h-[32px] flex">
    <div className="absolute left-0 top-0 w-[281px] h-[32px] bg-[#efefef] rounded-[9px]"></div>
    <img className="absolute left-[3.91%] right-[90.75%] top-[31.25%] bottom-[31.25%]" width="15" height="12" src="Vector6_361.png"></img>
    <div className="absolute left-[32px] top-[6px] text-[16px] leading-[120%] tracking-[-0.02em] font-['Inter'] text-[#494949] whitespace-nowrap">내 카드</div>
    <div className="absolute left-[126px] top-[6px] text-[16px] leading-[120%] tracking-[-0.02em] font-['Inter'] text-[#727272] whitespace-nowrap">하나은행 트래블로그</div>
  </div>
  <div className="absolute left-[39px] top-[588px] w-[281px] h-[32px] flex">
    <div className="absolute left-0 top-0 w-[281px] h-[32px] bg-[#efefef] rounded-[9px]"></div>
    <img className="absolute left-[3.91%] right-[90.75%] top-[28.12%] bottom-[34.38%]" width="15" height="12" src="./img/Profile/Vector6_364.png"></img>
    <div className="absolute left-[32px] top-[6px] text-[16px] leading-[120%] tracking-[-0.02em] font-['Inter'] text-[#494949] whitespace-nowrap">카드 번호</div>
    <div className="absolute left-[156px] top-[6px] text-[16px] leading-[120%] tracking-[-0.02em] font-['Inter'] text-[#727272] whitespace-nowrap"> *** **** 0828</div>
  </div>
  <div className="absolute left-[124px] top-[320px] w-[112px] h-[24px] flex">
    <img className="absolute left-0 top-0" width="24" height="24" src="./img/Profile/Group23_164.png"></img>
    <div className="absolute left-[29px] top-[7px] w-[90px] h-[14px] text-[12px] font-['Inter'] text-[#737373] text-align-["><button onClick={handleEditProfile}>프로필 수정하기</button></div>
  </div>
</DisplaySetting>)
}

export default Profile