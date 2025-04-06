import React from 'react'
import Title from '../../components/common/Title'

const Program = () => {
  return (
    <>
      <Title title="Program"/>
      <div className='program'>
        <div className='btn-wrap-row btns'>
          <button className='btn-base line on'>A룸</button>
          <button className='btn-base line'>B룸</button>
          <button className='btn-base line'>C룸</button>
        </div>
        <table className='table-style1'>
          <caption>프로그램 리스트</caption>
          <colgroup>
            <col style={{ width: '150px' }} />
            <col style={{ width: 'auto' }} />
            <col style={{ width: '255px' }} />
            <col style={{ width: '155px' }} />
          </colgroup>
          <thead>
            <tr>
							<th scope="col">Time</th>
							<th scope="col">Subject</th>
							<th scope="col">Speaker</th>
							<th scope="col">진행상태</th>
						</tr>
          </thead>
          <tbody>
            <tr className='on'>
              <td><span className="time">08:00 ~ 09:00</span></td>
              <td className='pro-title'><span>강의 타이틀이 들어갑니다</span></td>
              <td className='name'><span>홍길동</span></td>
              <td><button>입장하기</button></td>
            </tr>
            <tr>
              <td><span className="time">10:00 ~ 11:00</span></td>
              <td className='pro-title'>
                <span>강의 타이틀이 들어갑니다</span>
                <p className='sub-title'>강의 부제목이 타이틀이 들어갑니다. 강의 부제목이 타이틀이 들어갑니다.</p>
              </td>
              <td className='name'><span>홍길동</span></td>
              <td><button className='close'>종료</button></td>
            </tr>
            <tr>
              <td><span className="time">12:00 ~ 13:00</span></td>
              <td className='pro-title'><span>강의 타이틀이 들어갑니다</span></td>
              <td className='name'><span>홍길동</span></td>
              <td><button>입장하기</button></td>
            </tr>
            <tr>
              <td><span className="time">13:00 ~ 14:00</span></td>
              <td className='pro-title'><span>강의 타이틀이 들어갑니다</span></td>
              <td className='name'><span>홍길동</span></td>
              <td><button className='e-test'>E-TEST</button></td>
            </tr>
            <tr>
              <td><span className="time">14:00 ~ 15:00</span></td>
              <td className='pro-title'><span>강의 타이틀이 들어갑니다</span></td>
              <td className='name'><span>홍길동</span></td>
              <td><button className='e-test off'>E-TEST</button></td>
            </tr>
            <tr>
              <td><span className="time">15:00 ~ 16:00</span></td>
              <td className='pro-title'><span>강의 타이틀이 들어갑니다</span></td>
              <td className='name'><span>홍길동</span></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Program