import React, { useEffect, useState } from 'react';
import './ercomponents.css';

// 미국 USD 환율 정보를 가져오는 함수
const fetchUsdRate = async () => {
  try {
    // 실제 API URL로 변경 필요
    const response = await fetch('YOUR_API_URL_HERE');
    if (!response.ok) {
      throw new Error('환율 정보를 불러오는데 실패했습니다.');
    }
    const data = await response.json();

    // 예시 데이터 형식: { rate: 1205.00, change: 4.00, changePercent: 0.33 }
    // 실제 API의 데이터 구조에 맞게 변환해야함.
    return {
      rate: data.rate,
      change: data.change,
      changePercent: data.changePercent,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

function UsdExchangeRate() {
  const [usdRate, setUsdRate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsdRate = async () => {
      try {
        const data = await fetchUsdRate();
        setUsdRate(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getUsdRate();
  }, []);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생: {error}</div>;

  return (
    <div className="p-4 border-b border-gray-200 flex justify-between items-center">
      <div>
        <span className="text-lg font-bold">미국 USD</span>
        <div className="text-2xl">{usdRate.rate.toFixed(2)}</div>
      </div>
      <div className="text-right">
        <div className={`text-lg font-semibold ${usdRate.change > 0 ? 'text-red-500' : 'text-blue-500'}`}>
          {usdRate.change > 0 ? `▲ ${usdRate.change.toFixed(2)}` : `▼ ${Math.abs(usdRate.change.toFixed(2))}`}
        </div>
        <div className={`text-lg font-semibold ${usdRate.changePercent > 0 ? 'text-red-500' : 'text-blue-500'}`}>
          {usdRate.changePercent > 0 ? `+${usdRate.changePercent.toFixed(2)}%` : `${usdRate.changePercent.toFixed(2)}%`}
        </div>
      </div>
    </div>
  );
}

export default UsdExchangeRate;
