import React from 'react';

function Ncomponents({ notice_1, date_1, onClick }) {
  return (
    <div onClick={onClick} className="p-4 bg-white shadow-md rounded-md mb-4 flex flex-col cursor-pointer">
      <div className="text-lg font-bold text-black">
        {notice_1 || '제목이 없습니다.'} {/* 제목이 없는 경우 대체 텍스트 */}
      </div>
      <div className="text-sm text-gray-500 mt-2">
        {date_1 || '날짜가 없습니다.'} {/* 날짜가 없는 경우 대체 텍스트 */}
      </div>
    </div>
  );
}

export default Ncomponents;
