import './App.css';
import Detail from './pages/Detail/Detail.js';
import ExchangeRate from './pages/ExchangeRate/ExchangeRate.js';
import FindingATM from './pages/FindingATM/FindingATM.js';
import FirstPage from './pages/FirstPage/FirstPage.js';
import Main from './pages/Main/Main.js';
import MyCard from './pages/MyCard/MyCard.js';
import MyTrip from './pages/MyTrip/MyTrip.js';
import Notice from './pages/Notice/Notice.js';
import Profile from './pages/Profile/Profile.js';
import ProfileEdit from './pages/ProfileEdit/ProfileEdit.js';
import SignIn from './pages/SignIn/SignIn.js';
import TermOfUse from './pages/TermOfUse/TermOfUse.js';
import TermOfUseClick from './pages/TermOfUseClick/TermOfUseClick.js';


function App() {
  return (
    <div className="App">
      <h1>Detail</h1>
      <Detail/>

      <h1>ExchangeRate</h1>
      <ExchangeRate/>

      <h1>FindingATM</h1>
      <FindingATM/>
      
      <h1>FirstPage</h1>
      <FirstPage/>

      <h1>Main</h1>
      <Main/>

      <h1>MyCard</h1>
      <MyCard/>

      <h1>MyTrip</h1>
      <MyTrip/>

      <h1>Notice</h1>
      <Notice/>

      <h1>Profile</h1>
      <Profile/>

      <h1>ProfileEdit</h1>
      <ProfileEdit/>

      <h1>SignIn</h1>
      <SignIn/>

      <h1>TermOfUse</h1>
      <TermOfUse/>

      <h1>TermOfUseClick</h1>
      <TermOfUseClick/>
    </div>
  );
}

export default App;
