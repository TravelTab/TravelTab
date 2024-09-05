// EditButton.js
import { useNavigate } from 'react-router-dom';

const EditButton = () => {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate('/profileedit'); // 버튼 클릭 시 연결되는 주소
  };

  return (
    <div className="edit-profile">
      <img style={{ width: '24px', height: '24px' }} src="./img/Profile/Group23_164.png" alt="Edit Icon" />
      <button onClick={handleEditProfile}>프로필 수정하기</button>
    </div>
  );
};

export default EditButton;
