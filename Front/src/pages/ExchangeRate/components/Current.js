import React, { useEffect, useState } from "react";
import './ERcomponents.css';

const Current = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더해줌
      const date = String(now.getDate()).padStart(2, "0");
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const day = ["일", "월", "화", "수", "목", "금", "토"][now.getDay()];
      setCurrentTime(`${year}-${month}-${date}(${day}) ${hours}:${minutes}`);
    };

    // 처음 렌더링 시 현재 시간을 업데이트
    updateCurrentTime();

    // 매 분마다 시간 업데이트
    const intervalId = setInterval(updateCurrentTime, 60000);

    // 컴포넌트 언마운트 시 interval 제거
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="CurrentTime">
    {currentTime}
  </div>
  );
};

export default Current;