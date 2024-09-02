const AddCard=()=>{
    function addCard(){
        alert("카드 추가하기")
    }
    return(
        <div onClick={addCard}>
        <div className="absolute left-[37px] top-[580px] w-[150px] h-[40px] bg-[#fff] rounded-[5px] shadow-[3px_3px_5px_-1px_#00000040]"></div>
        <div className="absolute left-[84px] top-[592px] text-[16px] leading-[120%] tracking-[-0.02em] font-['Inter'] font-semibold text-[#409aa6] whitespace-nowrap">카드 추가하기</div>
        <img className="absolute left-[43px] top-[585px]" width="30" height="30" src="./img/MyCard/Group 149_229.png"></img>
        </div>
    )
}

export default AddCard