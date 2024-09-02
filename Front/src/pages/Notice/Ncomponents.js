import React from 'react';

function Ncomponents(props) {
  return (
    <div className="absolute left-[21px] top-[242px] w-[177px] h-[37px] flex">
      <div className="absolute left-0 top-0 w-[200px] h-[14px] text-[16px] font-['Inter'] font-bold text-[#000]">
        {props.notice_1}
      </div>
      <div className="absolute left-0 top-[23px] w-[74px] h-[14px] text-[12px] font-['Inter'] text-[#565656]">
        {props.date_1}
      </div>
    </div>
  );
}
export default Ncomponents;