// CountrySelectorModal.js
import ReactDOM from "react-dom";
import "./CountrySelectorModal.css"; // 모달에 대한 CSS 파일

const countries = [
  { name: "노르웨이" },
  { name: "뉴질랜드" },
  { name: "덴마크" },
  { name: "말레이시아" },
  { name: "미국" },
  { name: "바레인" },
  { name: "브루나이" },
  { name: "사우디" },
  { name: "스웨덴" },
  { name: "스위스" },
  { name: "싱가포르" },
  { name: "아랍에미리트" },
  { name: "영국" },
  { name: "중국" },
  { name: "유럽연합" },
  { name: "인도네시아" },
  { name: "일본" },
  { name: "캐나다" },
  { name: "쿠웨이트" },
  { name: "태국" },
  { name: "호주" },
  { name: "홍콩" },
];

const CountrySelectorModal = ({ isOpen, onClose, onSelect }) => {
  if (!isOpen) return null;

  const handleSelect = (country) => {
    onSelect(country);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>여행지 선택하기</h2>
        <ul style={{ cursor: "pointer" }}>
          {countries.map((country) => (
            <li key={country.code} onClick={() => handleSelect(country)}>
              {country.name}
            </li>
          ))}
        </ul>
        <button onClick={onClose}>취소</button>
      </div>
    </div>
  );
};

export default CountrySelectorModal;
