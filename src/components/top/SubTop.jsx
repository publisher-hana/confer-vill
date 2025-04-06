import React from 'react'

const SubTop = ({title,date,rating,labels}) => {
  return (
    <>
     <div className='sub-top'>
        <div className='container m0 confer-info'>
          <figure>
            <span className='label-dday'>D-10</span>
            <img src='/confer-vill/images/logo_dv_0.gif' alt='Dr.ville 컨퍼런스 기본 이미지지'/>
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
              <li><em>진행기간:</em>
                <span>{date}</span>
              </li>
              <li><em>평<span></span>점:</em> {rating}점</li>
              <li><em>주<span></span>최:</em> 대한의사협회</li>
              <li><em>유<span></span>료:</em> 주최 학회에서 사전 유료등록 후 신청 가능</li>
              <li><em>E-TEST:</em>
                <span>{date}</span>
              </li>
            </ul>
          </div>
          <div className='btn-wrap-row'>
            <button className='btn-base'>신청하기</button>
            <button className='btn-base line'>설문</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubTop