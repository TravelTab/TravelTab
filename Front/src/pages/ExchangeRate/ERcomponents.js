import React from 'react';

function ERcomponents(props) {
  return (
    <div className="absolute left-[23px] top-[235px] w-[315px] h-[69px] flex">
      <div className="absolute left-0 top-0 w-[141px] h-[69px] flex">
        <div className="absolute -translate-x-1/2 left-[calc(50%+-28px)] top-0 text-[20px] font-['Noto_Sans_KR'] font-bold text-[#000] whitespace-nowrap">
          {props.currency}
        </div>
        <div className="absolute -translate-x-1/2 left-1/2 top-[27px] text-[35px] font-['Inter'] text-[#000] whitespace-nowrap">
          {props.rate}
        </div>
      </div>
      <div className="absolute left-[237px] top-[9px] w-[78px] h-[50px] flex">
        <div className="absolute left-[1px] top-0 w-[60px] h-[24px] flex">
          <div className="absolute left-0 top-0 w-[60px] h-[24px] flex">
            <div className="absolute -translate-x-1/2 left-[calc(50%+8px)] top-0 text-[20px] font-['Inter'] font-semibold text-[#d40000] whitespace-nowrap">
              {props.change}
            </div>
            <img
              className="absolute left-0 right-[83.33%] top-[43.75%] bottom-[35.42%]"
              width="10"
              height="5"
              src={props.upArrow}
              alt="up arrow"
            />
          </div>
        </div>
        <div className="absolute left-0 top-[26px] w-[78px] h-[24px] flex">
          <div className="absolute -translate-x-1/2 left-[calc(50%+8px)] top-0 text-[20px] font-['Inter'] font-semibold text-[#d40000] whitespace-nowrap">
            {props.changePercent}
          </div>
          <img
            className="absolute left-0 right-[82.05%] top-[16.67%] bottom-[25%]"
            width="14"
            height="14"
            src={props.downArrow}
            alt="down arrow"
          />
        </div>
      </div>
    </div>
  );
}

export default ERcomponents;
