// CountrySelectorModal.js
import ReactDOM from "react-dom";
import "./CountrySelectorModal.css"; // 모달에 대한 CSS 파일

const countries = [
  { code: "US", name: "United States" },
  { code: "CA", name: "Canada" },
  { code: "GB", name: "United Kingdom" },
  { code: "KR", name: "South Korea" },
  { code: "FR", name: "France" },
  { code: "DE", name: "Germany" },
  { code: "JP", name: "Japan" },
  { code: "CN", name: "China" },
  { code: "IT", name: "Italy" },
  { code: "AU", name: "Australia" },
  { code: "BR", name: "Brazil" },
  { code: "MX", name: "Mexico" },
  { code: "IN", name: "India" },
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
        <ul>
          {countries.map((country) => (
            <li key={country.code} onClick={() => handleSelect(country)}>
              {country.name}
            </li>
          ))}
        </ul>
        <button onClick={onClose}>저장</button>
      </div>
    </div>
  );
};

export default CountrySelectorModal;
