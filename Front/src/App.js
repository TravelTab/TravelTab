import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Detail from "./pages/Detail/Detail.js";
import ExchangeRate from "./pages/ExchangeRate/ExchangeRate.js";
import FindingATM from "./pages/FindingATM/FindingATM.js";
import FirstPage from "./pages/FirstPage/FirstPage.js";
import Main from "./pages/Main/Main.js";
import MyCard from "./pages/MyCard/MyCard.js";
import MyTrip from "./pages/MyTrip/MyTrip.js";
import Notice from "./pages/Notice/Notice.js";
import Profile from "./pages/Profile/Profile.js";
import ProfileEdit from "./pages/ProfileEdit/ProfileEdit.js";
import SignIn from "./pages/SignIn/SignIn.js";
import TermOfUse from "./pages/TermOfUse/TermOfUse.js";
import TermOfUseClick from "./pages/TermOfUseClick/TermOfUseClick.js";
import Error from "./pages/Error.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/exchangerate" element={<ExchangeRate />} />
        <Route path="/findingatm" element={<FindingATM />} />
        <Route path="/main" element={<Main />} />
        <Route path="/myCard" element={<MyCard />} />
        <Route path="/mytrip" element={<MyTrip />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/profileedit" element={<ProfileEdit />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/termofuse" element={<TermOfUse />} />
        <Route path="/termofuseclick" element={<TermOfUseClick />} />
        <Route path="/error" element={<Error />} exact />
        <Route path="/*" element={<Navigate replace to="/error" />} />
      </Routes>
    </Router>
  );
}

export default App;
