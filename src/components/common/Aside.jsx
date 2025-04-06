import React from 'react'

const Aside = () => {
  return (
    <aside className='aside'>
      <a href='#' className='banner'>
        <span className='ico-info'></span>
        <strong>컨퍼런스 FAQ</strong>
        <span className='detail'>자세히 보기 &gt;</span>
      </a>
      <a href='#' className='banner'>
        <strong>고객센터</strong>
        <span className='tel'>1522-0209</span>
        <span className='detail'>자세히 보기 &gt;</span>
      </a>
    </aside>
  )
}

export default Aside