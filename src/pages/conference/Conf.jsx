import React, { useState } from 'react'
import SubTop from '../../components/top/SubTop'
import About from './About'
import Layout from '../../components/common/Layout'
import './conference.scss'
import Program from './Program'
import Archives from './Archives'

export const tabList = [
  {
    id: 1,
    category: "about",
  },
  {
    id: 2,
    category: "program",
  },
  {
    id: 3,
    category: "archives",
  },
]
const Conf = () => {
  const [activeCategory, setActiveCategory] = useState('about');
  const allCategory = tabList.map((item) => item.category);
  const activeTab = tabList.find(item => item.category === activeCategory);
  const handleTabClick = (category) => {
    setActiveCategory(category);
  };
  return (
    <>
      <div className='container-wrap'>
        <div className='conference-cont'>
          <SubTop 
            title="제 1회 Korea Microbiome Consortium (KMBC) 라이브 심포지엄 (한국표준과학연구원 주관)"
            date="2022년 7월 3일 (금) 09:00 ~ 17:00"
            rating="4"
            labels={['pay']} 
          />
          <div className='tabs'>
            <ul className='container m0'>
              {
                allCategory.map((category, i)=>(
                  <li key={i}>
                    <button
                      className={category === activeCategory ? 'on' : ''}
                      onClick={() => handleTabClick(category)}
                    >{category}
                    </button>
                  </li>
                ))
              }
              {/* <li><button className='on'>About</button></li>
              <li><button>About</button></li> */}
            </ul>
          </div>
          <Layout>
            {activeCategory === 'about' && <About confTitle={activeTab.title} />}
            {activeCategory === 'program' && <Program />}
            {activeCategory === 'archives' && <Archives />}
          </Layout>
        </div>
      </div>
    </>
  )
}

export default Conf