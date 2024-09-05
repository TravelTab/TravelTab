import { useState } from 'react';
import DisplaySetting from "../../shared/DisplaySetting";
import Header from "../../shared/components/Header";
import Ncomponents from "../Notice/components/Ncomponents";
import Modal from "../Notice/components/modal"; // 모달 컴포넌트 추가
import '../Notice/components/modal.css'; // 모달 스타일 추가

const Notice = () => {
  const notices = [
    { title: "이벤트 당첨에 대한 안내문", date: "2024-08-29" },
    { title: "오류에 대한 안내문", date: "2024-08-28" },
    { title: "서비스 점검 안내", date: "2024-08-27" }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredNotices, setFilteredNotices] = useState(notices);
  const [selectedNotice, setSelectedNotice] = useState(null); // 선택된 공지 상태
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 상태

  // 검색어 입력 핸들러
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
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

  // 공지 클릭 시 모달 열기
  const handleNoticeClick = (notice) => {
    setSelectedNotice(notice);
    setIsModalOpen(true);
  };

  // 모달 닫기
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedNotice(null);
  };

  return (
    <DisplaySetting>
      <div className="w-full min-h-screen flex flex-col items-center bg-white relative">
        <Header />


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
            className="ml-2 cursor-pointer"
            width="17"
            height="17"
            src="./img/Notice/Vector21_680.png"
            alt="Search Icon"
            onClick={handleSearch} // 돋보기 클릭 시 검색 실행
          />
        </div>

        {/* 모달이 열렸을 때만 블러 효과 적용 */}
        <div className={`w-full mt-4 px-4 ${isModalOpen ? 'blur' : ''}`}>
          {filteredNotices.map((notice, index) => (
            <Ncomponents 
              key={index} 
              notice_1={notice.title} 
              date_1={notice.date} 
              onClick={() => handleNoticeClick(notice)} 
            />
          ))}
        </div>

        {/* 모달 컴포넌트 */}
        <Modal 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
          notice={selectedNotice} 
        />
      </div>
    </DisplaySetting>
  );
};

export default Notice;