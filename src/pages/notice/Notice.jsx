import React from 'react'
import Visual from '../../components/top/Visual'
import '../pages.scss'
import Title from '../../components/common/Title'
import Layout from '../../components/common/Layout'
import { Link } from 'react-router-dom'
const Notice = () => {
  return (
    <div className='container-wrap'>
      <Visual visualText1="공지사항" titleClass="fs36"/>
      <Layout>
        <div className='notice'>
          <div className='flex-scb'>
            <Title title="공지사항" />
            <Link to="/inquiry" className='btn-base bg-skyblue'>1:1문의하기</Link>
          </div>
          <table className='table-style1'>
            <caption>프로그램 리스트</caption>
            <colgroup>
              <col style={{ width: '80px' }} />
              <col style={{ width: 'auto' }} />
              <col style={{ width: '155px' }} />
              <col style={{ width: '100px' }} />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">제목</th>
                <th scope="col">작성일</th>
                <th scope="col">조회</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className='num'>1</span></td>
                <td className='pro-title'><Link to="/notice/notice-view">닥터빌 컨퍼런스 이용시 주의사항</Link></td>
                <td><span className='date'>2022-08-20</span></td>
                <td><span className='txt-gray'>20</span></td>
              </tr>
              <tr>
                <td><span className='num'>1</span></td>
                <td className='pro-title'><Link to="/notice/notice-view">닥터빌 컨퍼런스 이용시 주의사항</Link></td>
                <td><span className='date'>2022-08-20</span></td>
                <td><span className='txt-gray'>20</span></td>
              </tr>
              <tr>
                <td><span className='num'>1</span></td>
                <td className='pro-title'><Link to="/notice/notice-view">닥터빌 컨퍼런스 이용시 주의사항</Link></td>
                <td><span className='date'>2022-08-20</span></td>
                <td><span className='txt-gray'>20</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Layout>
    </div>
  )
}

export default Notice