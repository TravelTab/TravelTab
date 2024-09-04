import { useState } from 'react';
import DisplaySetting from "../../shared/DisplaySetting";
import Header from "../../shared/components/Header";
import Ncomponents from "../Notice/components/Ncomponents";
import '../Notice/components/Notice.css';

const Notice = () => {
  const notices = [
    { title: "이벤트 당첨에 대한 안내문", date: "2024-08-29" },
    { title: "오류에 대한 안내문", date: "2024-08-28" },
    { title: "서비스 점검 안내", date: "2024-08-27" }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredNotices, setFilteredNotices] = useState(notices);

  // 검색어 입력 핸들러
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // 필터링은 여기서 하지 않음
  };

  // 검색 실행 핸들러
  const handleSearch = () => {
    const filtered = notices.filter((notice) =>
      notice.title.includes(searchTerm)
    );
    setFilteredNotices(filtered);
  };

  // 엔터 키로 검색 실행
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <DisplaySetting>
      <div className="w-full min-h-screen flex flex-col items-center bg-white relative">
        <Header />
        <h1 className="text-2xl font-semibold text-center mt-4">
          공지사항
        </h1>

        <div className="mt-4 w-[90%] flex items-center border-b-2 pb-2">
          <input
            type="text"
            placeholder="검색"
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown} // 엔터 키로 검색 실행
            className="w-full p-2 text-gray-700 text-sm border border-gray-300 rounded-md"
          />
          <img
            className="mr-2 cursor-pointer"
            width="17"
            height="17"
            src="./img/Notice/Vector21_680.png"
            alt="Search Icon"
            onClick={handleSearch} // 돋보기 클릭 시 검색 실행
          />
        </div>

        <div className="w-full mt-4 px-4">
          {filteredNotices.map((notice, index) => (
            <Ncomponents key={index} notice_1={notice.title} date_1={notice.date} />
          ))}
        </div>
      </div>
    </DisplaySetting>
  );
};

export default Notice;
