import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ExchangeRate from "./pages/ExchangeRate/ExchangeRate.js";
import ATMMap from "./pages/ATMMap/ATMMap.js";
import FirstPage from "./pages/FirstPage/FirstPage.js";
import Main from "./pages/Main/Main.js";
import MyCard from "./pages/MyCard/MyCard.js";
import MyTrip from "./pages/MyTrip/MyTrip.js";
import Notice from "./pages/Notice/Notice.js";
import Profile from "./pages/Profile/Profile.js";
import ProfileEdit_ from "./pages/ProfileEdit/ProfileEdit_.js";
import ProfileEdit from "./pages/ProfileEdit/ProfileEdit.js"
import Error from "./pages/Error.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        {/* 서연 */}
        <Route path="/exchangerate" element={<ExchangeRate />} />
        {/* 태양 */}
        <Route path="/atmmap" element={<ATMMap />} />
        {/* 영현 */}
        <Route path="/main" element={<Main />} />
        {/* 서연 */}
        <Route path="/myCard" element={<MyCard />} />
        {/* 영현 */}
        <Route path="/mytrip" element={<MyTrip />} />
        {/* 영현 */}
        <Route path="/notice" element={<Notice />} />
        {/* 태양 */}
        <Route path="/profile" element={<Profile/>} />
        {/* 태양 */}
        <Route path="/profileEdit" element={<ProfileEdit/>} />
        {/* 태양 */}
        <Route path="/profileEdit_" element={<ProfileEdit_/>} />
        {/* 태양 */}

        <Route path="/error" element={<Error />} exact />
        <Route path="/*" element={<Navigate replace to="/error" />} />
      </Routes>
    </Router>
  );
}

export default App;
