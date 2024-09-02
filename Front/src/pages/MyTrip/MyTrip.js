import Header from '../../shared/components/Header'
import DisplaySetting from '../../shared/DisplaySetting'
import Country from './components/Country'

const MyTrip = () => {
	return (<DisplaySetting>
  <div className="absolute left-0 top-0 w-[360px] h-[640px] flex">
    <div className="absolute left-0 top-0 w-[360px] h-[640px] bg-[linear-gradient(180deg,#f4fffb_0%,#fff_100%)]"></div>
    <Header/>
  </div>
  <Country/>
  <div className="absolute left-[20px] top-[80px] w-[246px] h-[95px] text-[35px] font-['Inter'] font-bold text-[#000]">내 여행지</div>
  <div className="absolute -translate-x-1/2 left-[calc(50%+-103px)] top-[225px] text-[20px] font-['Inter'] font-semibold text-[#000] whitespace-nowrap">여행지 추가하기</div>

</DisplaySetting>)
}

export default MyTrip