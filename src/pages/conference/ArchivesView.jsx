import React from 'react'
import Title from '../../components/common/Title'
import SubTop from '../../components/top/SubTop'
import Layout from '../../components/common/Layout'

const ArchivesView = () => {
  return (
    <>
      <div className='container-wrap'>
        <SubTop 
          title="제 1회 Korea Microbiome Consortium (KMBC) 라이브 심포지엄 (한국표준과학연구원 주관)"
          date="2022년 7월 3일 (금) 09:00 ~ 17:00"
          rating="4"
          labels={['pay']} 
        />
        <Layout>
          <Title title="Archives"/>
          <div className='board-cont'>
            <div className='board-header'>
              <div className='board-title'>
                <h3>대한장연구학회 제91차 학술집담회</h3>
                <span className='date'>작성일 2021-04-06 13:23:56</span>
              </div>
              <a href="#" download className="file-download">
                <span className='ico-file'></span>
                대한장연구학회 제91차 학술집담회.pdf
              </a>
            </div>
            <div className='board-body'>
                안녕하세요,
                <br />
                대한장연구학회 제91차 학술집담회 자료실 입니다
            </div>
            <div className='board-nav'>
              <div className='row'>
                <span className='nav-title'>이전글</span>
                <a href='#'>[종료] 온라인 시장조사에 참여할 패널을 모집합니다.</a>
              </div>
              <div className='row'>
                <span className='nav-title'>다음글</span>
                <a href='#'>3/11일 닥라이브 안내 및 베타 테스트 운영 안내</a>
              </div>
            </div>
          </div>
          <div className='btn-wrap-row btm right'>
            <button className='btn-base line gray'>목록</button>
          </div>
        </Layout>
      </div>
    </>
  )
}

export default ArchivesView