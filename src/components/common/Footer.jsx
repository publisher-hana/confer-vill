import React, { useState } from 'react'
import Logo from './Logo'
const Footer = () => {
   const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  return (
    <footer>
      <div className='container'>
        <Logo />
        <div className='inner flex-scb'>
          <div className='info'>
            <ul className="term-list flex">
              <li><a href="policy.html">이용약관</a><span className="txt-bar">|</span></li>
              <li><a href="userinfo.html"><strong>개인정보처리방침</strong></a></li>
            </ul>
            <div className='office'>서울 강남구 봉은사로 114길 12 (삼성동)<span className="txt-bar">|</span>대표자 : 서종원<span className="txt-bar">|</span>사업자번호 : 120-86-10499<br />
            고객센터 : 1522-0209(월-금: 09:30-17:30 / 그 외 행사 운영시간에 따름)<span className="txt-bar">|</span>팩스 : 02-563-8399</div>
            <span className="copyright">Copyright <em>ⓒ Mcircle.</em> All right reserved</span>
          </div>
          <div className={`family-site ${isOpen ? 'open' : ''}`}>
            <div className="sites">
              <a href="#" target="_blank">
                하이닥
              </a>
              <a href="#" target="_blank">
                더샵
              </a>
              <a href="#" target="_blank">
                클릭메디
              </a>
              <a href="#" target="_blank">
                해피케어
              </a>
              <a href="#" target="_blank">
                시셀
              </a>
              <a href="#" target="_blank">
                닥터빌
              </a>
            </div>
            <button className="site_btn" onClick={handleToggle}>
              Family Site
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer