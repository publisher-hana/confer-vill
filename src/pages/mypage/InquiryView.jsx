import React from 'react'
import Visual from '../../components/top/Visual'
import Layout from '../../components/common/Layout'
import Title from '../../components/common/Title'

const InquiryView = () => {
  return (
    <div className='container-wrap'>
      <Visual visualText1="1:1문의" titleClass="fs36"/>
      <Layout>
        <Title title="1:1문의"/>
         <div className='one-one-view'>
            <div className='board-cont'>
              <div className='board-header'>
                <div className='board-title'>
                  <span className='eyebrow'>입/퇴장관련</span>
                  <h3>심부전학회 세션3 출석이 안 되었습니다.</h3>
                  <span className='date'><em>작성일:</em> 2022-04-06</span>
                  <span className='date'><em>답변일:</em> 2022-04-10</span>
                  <div><span className='date'><em>컨퍼런스명:</em> 2021 SMC Vascular Symposium</span></div>
                </div>
              </div>
              <div className='board-body'>
                  안녕하세요,
                  <br />심부전학회 세션 3출석이 안 되었는데 확인 부탁드립니다.
              </div>
              <div className='board-body'>
                  <span className='label-replay'>답변내용</span>
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
  )
}

export default InquiryView