import React from 'react'
import Visual from '../../components/top/Visual'
import Layout from '../../components/common/Layout'
import Title from '../../components/common/Title'
import { Link } from 'react-router-dom'

const Inquiry = () => {
  return (
    <div className='container-wrap'>
      <Visual visualText1="1:1 문의" titleClass="fs36"/>
      <Layout>
        <div className='one-one-inquiry'>
          <Title title="1:1문의" />
          <table className='table-style1'>
            <caption>1:1문의 테이블</caption>
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
                <th scope="col">상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className='num'>1</span></td>
                <td className='pro-title'><Link to="/inquiry/inquiry-view">심부전학회 세션3 출석이 안 되었습니다.</Link></td>
                <td><span className='date'>2022-08-20</span></td>
                <td><span className='replay-wait'>답변대기</span></td>
              </tr> <tr>
                <td><span className='num'>2</span></td>
                <td className='pro-title'><Link to="/inquiry/inquiry-view">심부전학회 세션3 출석이 안 되었습니다.</Link></td>
                <td><span className='date'>2022-08-20</span></td>
                <td><span className='replay-wait'>답변대기</span></td>
              </tr>
              <tr>
                <td><span className='num'>3</span></td>
                <td className='pro-title'><Link to="/inquiry/inquiry-view">심부전학회 세션3 출석이 안 되었습니다.</Link></td>
                <td><span className='date'>2022-08-20</span></td>
                <td><span className='replay-end'>답변완료</span></td>
              </tr>
              <tr>
                <td><span className='num'>4</span></td>
                <td className='pro-title'><Link to="/inquiry/inquiry-view">심부전학회 세션3 출석이 안 되었습니다.</Link></td>
                <td><span className='date'>2022-08-20</span></td>
                <td><span className='replay-end'>답변완료</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Layout>
    </div>
  )
}

export default Inquiry