import React, { useEffect, useState } from 'react';
import './ERcomponents.css';

// 미국 USD 환율 정보를 가져오는 함수
const fetchUsdRate = async () => {
  try {
    const response = await fetch('http://127.0.0.1:5500/nowexchange');
    if (!response.ok) {
      throw new Error('환율 정보를 불러오는데 실패했습니다.');
    }

    const data = await response.json();
    return {
      data
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

function repeat(usdRate) {
  let exchangeinfo = usdRate.data[24];
  let beforeData = usdRate.data[23];
  return exchangeinfo.map((info, i) => {
    let cur = info.cur;
    let unit = info.cur_unit;
    let exrate = Number(usdRate.data[i].kftc_deal_bas_r.replace(/,/g, ''));
    let berate = beforeData[i].kftc_deal_bas_r.replace(/,/g, '');
    let change = Number(berate - exrate);
    let changePercent = (100 - (exrate / berate) * 100);
    let rate = exrate.toLocaleString('ko-KR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    return (
      <div className="newbox" key={i}>
        <div>
          <span className="cur">{`${cur} ${unit}`}</span>
          <div className="rate">{rate}</div>
        </div>
        <div className="text-right">
          <div className={`text-lg font-semibold ${change > 0 ? 'text-red-500' : 'text-blue-500'}`}>
            {change > 0 ? `▲ ${change.toFixed(2)}` : `▼ ${Math.abs(change.toFixed(2))}`}
          </div>
          <div className={`text-lg font-semibold ${changePercent > 0 ? 'text-red-500' : 'text-blue-500'}`}>
            {changePercent > 0 ? `+${changePercent.toFixed(2)}%` : `${changePercent.toFixed(2)}%`}
          </div>
        </div>
      </div>
    );
  });
}

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
    <div>
      {repeat(usdRate)}
    </div>
  );
}

export default UsdExchangeRate;
