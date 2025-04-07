import React, { useState } from 'react'
import Visual from '../../components/top/Visual'
import Layout from '../../components/common/Layout'
import Title from '../../components/common/Title'
export const brandTabs = [
  {id: 1,category: "전체",},
  {id: 2,category: "대웅제약",},
  {id: 3,category: "한국다이찌산쿄",},
  {id: 4,category: "한국아스텔라스제약",},
  {id: 5,category: "LG화학",},
  {id: 6,category: "한올바이오파마",},
  {id: 7,category: "일양약품",},
  {id: 8,category: "삼성바이오에피스",},
  {id: 8,category: "SK바이오사이언스",},
  {id: 9,category: "대웅바이오",},
  {id: 10,category: "한국룬드벡",},
  {id: 11,category: "한국머크",},
]


const BrandZone = () => {
  const [selectedCategory, setSelectedCategory] = useState('medicine');
  return (
   <>
     <div className='container-wrap'>
      <Visual visualText1="컴퍼런스빌" visualText2="브랜드존"/>
      <Layout>
        <div className='brand-zone'>
          <div className='category-tabs'>
            <button 
              className={selectedCategory === 'medicine' ? 'on' : ''} 
              onClick={()=>setSelectedCategory('medicine')}>의약품</button>
            <button 
              className={selectedCategory === 'medicalDevice' ? 'on' : ''} 
              onClick={()=>setSelectedCategory('medicalDevice')}>의료기기</button>
          </div>

          <ul className='brand-tabs grid'>
            {selectedCategory === 'medicine' && (
              <>
                <li className='on'><button>한국머크</button></li>
                {brandTabs.map((item, i) => (
                  <li key={i}>
                    <button>{item.category}</button>
                  </li>
                ))}
              </>
            )}
          </ul>
          <ul className='brand-tabs grid'>
            {selectedCategory==='medicalDevice' && (
              <>
                <li className='on'><button>한국머크</button></li>
                <li><button>일양약품</button></li>
                <li><button>대웅바이오</button></li>
                <li><button>삼성바이오에피스</button></li>
              </>
            )}
          </ul>
          <div className='product-tabs'>
            <ul className='grid'>
              <li><button className='on'>전체</button></li>
              <li><button>감염성질환</button></li>
              <li><button>근골격질환</button></li>
              <li><button>비뇨생식기질환</button></li>
              <li><button>소화기질환</button></li>
              <li><button>신경질환</button></li>
              <li><button>심혈관질환</button></li>
              <li><button>암질환</button></li>
              <li><button>피부/성형질환</button></li>
              <li><button>호흡기질환</button></li>
              <li><button>기타질질환</button></li>
            </ul>
          </div>
          <div className='cont-title-wrap'>
            <Title title="제품정보"/><span className='skyblue'>54</span>
          </div>
          <div className='products-boxes'>
            <PrdBox img="/confer-vill/images/product_01.jpg" cate="순환기" prdTitle="릭시아나" subTitle="항응고제" desc="출혈안전성과 복약편의성 두 가지를 동시에 만족하는 유일한 항응고제" />
            <PrdBox img="/confer-vill/images/product_02.jpg" cate="호흡기" prdTitle="에클리라" subTitle="COPD 흡입 치료제 (LAMA)" desc="하루 2회 사용으로 초기 COPD 환자의 24시간 호흡곤란 증상을 개선" />
            <PrdBox img="/confer-vill/images/product_03.jpg" cate="소화기" prdTitle="바이오탑에스/바이오탑디/바이오탑하이" subTitle="정장제" desc="균주의 차이는 효과의 차이! 산소 유무에 따라 작용하는 3종 균주 배합" />
            <PrdBox img="/confer-vill/images/product_04.jpg" cate="순환기" prdTitle="대웅로수바스타틴" subTitle="COPD 흡입 치료제 (LAMA + LABA)" desc="강력한 LDL-C 강하효과, 죽상동맥경화증 진행지연 적응중" />
            <PrdBox img="/confer-vill/images/product_05.jpg" cate="호흡기" prdTitle="듀어클리어" subTitle="고지혈증치료제" desc="하루 2회 사용으로 중등도 이상 COPD 환자의 24시간 호흡곤란 증상을 개선" />
          </div>
          <button className='btn-base line more'>더보기</button>
        </div>
      </Layout>
     </div>
   </>
  )
}

export const PrdBox = ({img, cate,prdTitle,subTitle,desc}) => {
  return(
    <div className='box'>
      <figure><img src={img} alt=''/></figure>
      <div className='inner'>
        <div className='info'>
          <span className='md-cate'>{cate}</span>
          <strong>{prdTitle}</strong>
          <span>{subTitle}</span>
          <p className='desc'>{desc}</p>
        </div>
        <button className='btn-base detail'>자세히보기</button>
      </div>
    </div>
  )
}

export default BrandZone