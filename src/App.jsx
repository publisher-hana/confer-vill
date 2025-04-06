import { Route,  HashRouter as Router, Routes, useLocation  } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./pages/home/Home";
import Footer from "./components/common/Footer";
import Conf from "./pages/conference/Conf";
import { useEffect } from "react";
import Notice from "./pages/notice/Notice";
import NoticeView from "./pages/notice/NoticeView";
import ArchivesView from "./pages/conference/ArchivesView";
import BrandZone from "./pages/brand-zone/BrandZone";
import MyPage from "./pages/mypage/MyPage";
import Inquiry from "./pages/mypage/Inquiry";
import InquiryView from "./pages/mypage/InquiryView";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 페이지 경로가 변경될 때 스크롤을 맨 위로 이동
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path ="/" element={
          <Home />
        } />
        <Route path ="/conference" element={
          <Conf />
        } />
        <Route path ="/conference/archives-view" element={
          <ArchivesView />
        } />
        <Route path ="/notice" element={
          <Notice />
        } />
        <Route path ="/notice/notice-view" element={
          <NoticeView />
        } />
        <Route path ="/brand-zone" element={
          <BrandZone />
        } />
        <Route path ="/mypage" element={
          <MyPage />
        } />
        <Route path ="/inquiry" element={
          <Inquiry />
        } />
        <Route path ="/inquiry/inquiry-view" element={
          <InquiryView />
        } />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
