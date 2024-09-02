const Country=()=>{
    function addCountry(){
        alert("국가 추가")
    }
    return(
    <div onClick={addCountry}>
    <img className="absolute left-[25px] top-[256px]" width="310" height="128" src="./img/MyTrip/Rectangle 3712_49.png"></img>
    <div className="absolute -translate-x-1/2 left-[calc(50%+-133px)] top-[261px] text-[20px] font-['Inter'] font-semibold text-[#000] whitespace-nowrap">일본</div>
    <div className="absolute -translate-x-1/2 left-[calc(50%+-37px)] top-[347px] text-[24px] font-['Inter'] font-semibold text-[#fff] whitespace-nowrap">JPY 100 = 923.96원</div>
    </div>
    )
}

export default Country;