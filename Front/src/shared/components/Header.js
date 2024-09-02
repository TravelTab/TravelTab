const Header=()=>{
    let title='not found';
    if (window.location.pathname==='/mytrip')
        title="내 여행";
    if (window.location.pathname==='/mycard')
        title="내 카드";
    if (window.location.pathname==='/exchangerate')
        title="환율 정보";
    if (window.location.pathname==='/notice')
        title="공지사항";
    if (window.location.pathname==='/profile')
        title="프로필";
    function back(){
        alert("뒤로가기")
    }
    function quit(){
        alert("종료")
    }

    return(
        <div>
        <div className="absolute left-0 top-0 w-[360px] h-[56px] bg-[#91f6ba]"></div>
        {/* 뒤로가기 버튼 */}
        <img className="absolute left-[21px] top-[16px]" width="14" height="23" src="./img/MyTrip/Component 111_34.png" onClick={back}></img>
        {/* X 버튼 */}
        <img className="absolute left-[322px] top-[19px]" width="18" height="18" src="./img/MyTrip/Component 111_35.png"onClick={quit}></img>
    <div className="absolute -translate-x-1/2 left-1/2 top-[16px] text-[20px] leading-[120%] tracking-[-0.02em] font-['Noto_Sans_KR'] font-semibold text-[#000] text-center whitespace-nowrap">{title}</div>
    </div>
    )
}

export default Header