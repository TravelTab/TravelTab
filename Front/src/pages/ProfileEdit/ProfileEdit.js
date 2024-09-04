import React, { useState } from 'react';
import DisplaySetting from '../../shared/DisplaySetting';
import Header from '../../shared/components/Header';
import '../Profile/Profile.css';

const TextInput = () => {
  const [value, setValue] = useState(''); // 상태 관리

  const handleChange = (event) => {
    setValue(event.target.value); // 입력 값 업데이트
  };

  return (
    <DisplaySetting>
    <div>
    <Header />
      <input 
        type="text" 
        value={value} 
        onChange={handleChange} 
        placeholder="텍스트를 입력하세요"
      />
      <p>입력한 내용: {value}</p>
    </div>
    </DisplaySetting>
  );
};


const ProfileEdit = () => {
	return (<div className="relative w-[360px] h-[640px] bg-[#fff] overflow-hidden">
  <div className="absolute left-0 top-0 w-[360px] h-[640px] flex">
    <div className="absolute left-0 top-0 w-[360px] h-[640px] bg-[linear-gradient(180deg,#f4fffb_0%,#fff_100%)]"></div>
    <div className="absolute -translate-x-1/2 left-1/2 top-[80px] w-[196px] h-[196px] bg-[#d9d9d9] rounded-full shadow-[0_4px_4px_14px_#ffffff4d]"></div>
    <div className="absolute left-0 top-0 w-[360px] h-[56px] flex">
      <div className="absolute left-0 top-0 w-[360px] h-[56px] bg-[#91f6ba]"></div>
    </div>
    <img className="absolute left-[221px] top-[239px]" width="44" height="36" src="./img/ProfileEdit/Group 223_259.png"></img>
    <div className="absolute -translate-x-1/2 left-1/2 top-[288px] text-[20px] leading-[120%] tracking-[-0.02em] font-['Inter'] font-semibold text-[#000] text-center whitespace-nowrap">김토뱅</div>
    <div className="absolute -translate-x-1/2 left-1/2 top-[16px] text-[20px] leading-[120%] tracking-[-0.02em] font-['Noto_Sans_KR'] font-semibold text-[#000] text-center whitespace-nowrap">프로필</div>
    <div className="absolute left-[39px] top-[363px] w-[281px] h-[32px] flex">
      <div className="absolute left-0 top-0 w-[281px] h-[32px] bg-[#efefef] rounded-[9px]"></div>

      <div className="section">
          <img className="icon" width="16" height="16" src="./img/Profile/Vector6_224.png" alt="Edit" />
          <div className="item">이름</div>
          <div className="value" title="김토뱅">김토뱅</div> {/* title 속성을 추가하여 툴팁 표시 */}
        </div>
      </div>

      <div className="section">
          <img className="icon" width="14" height="14" src="./img/Profile/Vector6_353.png" alt="Phone" />
          <div className="item">전화번호</div>
          <div className="value" title="010-1004-1004">010-1004-1004</div>
      </div>

      <div className="section">
          <img className="icon" width="17" height="14" src="./img/Profile/Vector6_356.png" alt="Email" />
          <div className="item">이메일</div>
          <div className="value" title="imemail@naver.com">imemail@naver.com</div>
      </div>

    <div className="absolute left-[39px] top-[498px] w-[281px] h-[32px] flex">
      <div className="absolute left-0 top-0 w-[281px] h-[32px] bg-[#efefef] rounded-[9px]"></div>
      <div className="absolute left-[32px] top-[6px] text-[16px] leading-[120%] tracking-[-0.02em] font-['Inter'] text-[#494949] whitespace-nowrap">집 주소</div>
      <img className="absolute left-[3.56%] right-[90.75%] top-[28.12%] bottom-[28.12%]" width="16" height="14" src="./img/ProfileEdit/Vector23_280.png"></img>
    </div>
    <div className="absolute left-[39px] top-[543px] w-[281px] h-[32px] flex">
      <div className="absolute left-0 top-0 w-[281px] h-[32px] bg-[#efefef] rounded-[9px]"></div>
      <img className="absolute left-[3.91%] right-[90.75%] top-[31.25%] bottom-[31.25%]" width="15" height="12" src="./img/ProfileEdit/Vector23_283.png"></img>
      <div className="absolute left-[32px] top-[6px] text-[16px] leading-[120%] tracking-[-0.02em] font-['Inter'] text-[#8f8f8f] whitespace-nowrap">내 카드</div>
      <div className="absolute left-[126px] top-[6px] text-[16px] leading-[120%] tracking-[-0.02em] font-['Inter'] text-[#8f8f8f] whitespace-nowrap">하나은행 트래블로그</div>
    </div>
    <div className="absolute left-[39px] top-[588px] w-[281px] h-[32px] flex">
      <div className="absolute left-0 top-0 w-[281px] h-[32px] bg-[#efefef] rounded-[9px]"></div>
      <img className="absolute left-[3.91%] right-[90.75%] top-[28.12%] bottom-[34.38%]" width="15" height="12" src="./img/ProfileEdit/Vector23_288.png"></img>
      <div className="absolute left-[32px] top-[6px] text-[16px] leading-[120%] tracking-[-0.02em] font-['Inter'] text-[#8f8f8f] whitespace-nowrap">카드 번호</div>
      <div className="absolute left-[156px] top-[6px] text-[16px] leading-[120%] tracking-[-0.02em] font-['Inter'] text-[#8f8f8f] whitespace-nowrap"> *** **** 0828</div>
    </div>
    <div className="absolute left-[124px] top-[320px] w-[112px] h-[24px] flex">
      <img className="absolute left-0 top-0" width="24" height="24" src="./img/ProfileEdit/Group23_292.png"></img>
      <div className="absolute left-[29px] top-[7px] w-[83px] h-[14px] text-[12px] font-['Inter'] text-[#737373]">프로필 수정하기</div>
    </div>
    <img className="absolute left-[84.44%] right-[12.78%] top-[58.28%] bottom-[40.16%]" width="10" height="10" src="./img/ProfileEdit/Vector23_298.png"></img>
    <img className="absolute left-[84.44%] right-[12.78%] top-[65.47%] bottom-[32.97%]" width="10" height="10" src="./img/ProfileEdit/Vector23_299.png"></img>
    <img className="absolute left-[84.44%] right-[12.78%] top-[72.66%] bottom-[25.78%]" width="10" height="10" src="./img/ProfileEdit/Vector23_300.png"></img>
    <img className="absolute left-[84.44%] right-[12.78%] top-[79.84%] bottom-[18.59%]" width="10" height="10" src="./img/ProfileEdit/Vector23_301.png"></img>
  </div>
  <div className="absolute left-0 top-0 w-[360px] h-[640px] bg-[#2b2b2b80] filter-[backdrop-blur(2px)]"></div>
  <div className="absolute -translate-x-1/2 left-1/2 top-[324px] w-[36px] h-[14px] text-[12px] font-['Inter'] text-[#fff]">0 / 60</div>
  <div className="absolute -translate-x-1/2 left-1/2 top-[279px] w-[272px] h-[41px] bg-[#fff] rounded-[7px]"></div>
  <div className="absolute -translate-x-1/2 left-1/2 top-[311px] w-[247px] h-0 border-[1px] border-solid border-[#565656]"></div>
  <div className="absolute -translate-x-1/2 left-1/2 top-[286px] w-[20px] h-0 border-[1px] border-solid border-[#4a4a4a]"></div>
</div>
);
};

export default ProfileEdit