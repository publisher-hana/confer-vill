import React, { useEffect, useState } from 'react'
import '../layout.scss'
import Logo from './Logo'
import { NavLink, Link } from 'react-router-dom'
export const NavLists = [
  { id: 1, url: "home", path: "/" },
  { id: 2, url: "conference", path: "/conference" },
  { id: 3, url: "공지사항", path: "/notice" },
  { id: 4, url: "브랜드존", path: "/brand-zone" },
];
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
    useEffect(()=>{
      const handlescroll = () => {
        const scrollTop = window.scrollY;
        setIsScrolled(scrollTop >80);
      };
  
      window.addEventListener("scroll", handlescroll);
      return () => window.removeEventListener("scroll", handlescroll);
    })
  return (
    <>
      <header className={`${isScrolled ? "shadow-box" : ""}`}>
        <div className='container inner'>
          <div className='flexc'>
            <Logo />
            <nav>
              <ul className='nav-list'>
              {
                NavLists.map((list) =>(
                  <li key={list.id}>
                    <NavLink className={({ isActive  }) =>(isActive ? "on" : "")} to={list.path}>
                        {list.url}
                    </NavLink>
                  </li>
                ))
              }
              </ul>
            </nav>
          </div>
          <div className='mypage'>
            <button className='my-name'>닥터빌 님</button>
            <ul className='mypage-links'>
              <li>
                <Link to="/mypage">마이페이지</Link>
              </li>
              <li>
                <Link to="/inquiry">1:1 문의</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}


export default Header