import React from 'react'
import Title from '../../components/common/Title'
import Layout from '../../components/common/Layout'
import Visual from '../../components/top/Visual'

const NoticeView = () => {
  return (
    <>
      <div className='container-wrap'>
        <Visual visualText1="공지사항" titleClass="fs36"/>
        <Layout>
          <Title title="공지사항"/>
          <div className='notice'>
            <div className='board-cont'>
              <div className='board-header'>
                <div className='board-title'>
                  <h3>닥터빌 컨퍼런스 이용시 주의사항</h3>
                  <span className='date'>작성일: 2021-04-06 13:23:56</span>
                </div>
                <a href="#" download className="file-download">
                  <span className='ico-file'></span>
                  대한장연구학회 제91차 학술집담회.pdf
                </a>
              </div>
              <div className='board-body'>
                  안녕하세요,
                  <br />이용에 불편을 드려 죄송합니다.
                  <br />출석한 것으로 확인 되시어 출석처리 하였습니다.
                  <br /><br />감사합니다.
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
          </div>
        </Layout>
      </div>
    </>
  )
}

export default NoticeView