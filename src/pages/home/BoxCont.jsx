import React from 'react'
import { Link } from 'react-router-dom';

const BoxCont = ({title,date,rating,labels}) => {
  return (
    <>
      <Link to="conference" className='box-cont confer-info'>
        <figure>
          <img src='/logo_dv_0.gif' alt='Dr.ville 컨퍼런스 기본 이미지지'/>
        </figure>
        <div className='detail'>
          <div className="title-wrap">
            <strong className="title">{title}</strong>
            {labels.map((label, i) => {
              if (label === 'pay') return <span key={i} className='ico-label pay'>유료</span>;
              if (label === 'closed') return <span key={i} className='ico-label closed'>신청마감</span>;
              if (label === 'e-test') return <span key={i} className='ico-label e-test'>E-TEST</span>;
              if (label === 'end') return <span key={i} className='ico-label end'>종료</span>;
              return null;
            })}
          </div>
          <ul className='info-list'>
            <li className='flex'>진행기간:
             <span>{date}</span>
            </li>
            <li>평점: {rating}점</li>
          </ul>
        </div>
      </Link>
    </>
  )
}

export default BoxCont