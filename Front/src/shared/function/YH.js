const getMyCard = async () => {
  try {
    const response = await fetch("http://127.0.0.1:5500/mycard");
    if (!response.ok) {
      throw new Error("카드 정보를 불러오는데 실패했습니다.");
    }
    const data = await response.json();
    console.log(data);
    return {
      data,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const madeMyCardList = (card_list) => {
  // card_list=['travellog','travelwallet','toss','shinhan','kb','woori']
  let myCardList = [];
  card_list.map((card_name) => {
    if (card_name === "travelog")
      myCardList.push({
        card_name: "트래블로그 체크 카드 (0001)",
        advantage:
          "연회비 없음<br/>해외 이용 수수료 면제<br/>주요 통화 환전시 환율 100% 우대",
        current: "미국, 일본, 기타, 등등",
        img_url: "./img/card/hana.png",
      });
    if (card_name === "travelwallet")
      myCardList.push({
        card_name: "트래블월렛 체크 카드 (0002)",
        advantage:
          "연회비 없음<br/>해외 이용 수수료 면제<br/>주요 통화 환전시 환율 100% 우대",
        current: "45종",
        img_url: "./img/card/travelwallet.jfif",
      });
    if (card_name === "toss")
      myCardList.push({
        card_name: "토스 체크 카드 (0003)",
        advantage:
          "연회비 없음<br/>해외 이용 수수료 면제<br/>주요 통화 환전시 환율 100% 우대",
        current: "17종",
        img_url: "./img/card/toss.jfif",
      });
    if (card_name === "SOLtravel")
      myCardList.push({
        card_name: "신한 SOL 트래블 체크 카드 (0004)",
        advantage:
          "연회비 없음<br/>해외 이용 수수료 면제<br/>주요 통화 환전시 환율 100% 우대",
        current: "42종",
        img_url: "./img/card/shinhan.png",
      });
    if (card_name === "travelus")
      myCardList.push({
        card_name: "KB 국민 트래블러스 체크 카드 (0005)",
        advantage:
          "연회비 없음<br/>해외 이용 수수료 면제<br/>주요 통화 환전시 환율 100% 우대",
        current: "56종",
        img_url: "./img/card/kb.jfif",
      });
    if (card_name === "wibeetravel")
      myCardList.push({
        card_name: "우리 위비트래블 체크 카드 (0006)",
        advantage:
          "연회비 없음<br/>해외 이용 수수료 면제<br/>주요 통화 환전시 환율 100% 우대",
        current: "30종",
        img_url: "./img/card/woori.png",
      });
  });
  return { myCardList };
};

export { madeMyCardList };
