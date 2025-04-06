import React from 'react'
import Title from '../../components/common/Title'
import { Link } from 'react-router-dom'
const Archives = () => {
  return (
    <>
      <Title title="Archives"/>
      <div className='archives'>
        <table className='table-style1 program-table'>
          <caption>프로그램 리스트</caption>
          <colgroup>
            <col style={{ width: '80px' }} />
            <col style={{ width: 'auto' }} />
            <col style={{ width: '155px' }} />
          </colgroup>
          <thead>
            <tr>
							<th scope="col">No</th>
							<th scope="col">제목</th>
							<th scope="col">등록일</th>
						</tr>
          </thead>
          <tbody>
            <tr>
              <td><span className='num'>1</span></td>
              <td className='pro-title'>
                <Link to="/conference/archives-view">2022년 대한심부전학회 심포지움 브로셔 2022년 대한심부전학회 심포지움 브로셔 2022년 대한심부전학회 심포지움 브로셔 2022년 대한심부전학회 심포지움 브로셔 2022년 대한심부전학회 심포지움 브로셔</Link>
                <span className='ico-file'></span>
              </td>
              <td><span className='date'>2022-08-20</span></td>
            </tr>
            <tr>
              <td><span className='num'>2</span></td>
              <td className='pro-title'>
                <Link to="/conference/archives-view">2022년 대한심부전학회 심포지움 브로셔 </Link>
                <span className='ico-file'></span>
              </td>
              <td><span className='date'>2022-08-20</span></td>
            </tr>
            <tr>
              <td><span className='num'>3</span></td>
              <td className='pro-title'>
                <Link to="/conference/archives-view">2022년 대한심부전학회 심포지움 브로셔 </Link>
              </td>
              <td><span className='date'>2022-08-20</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Archives