import React from 'react'
import Visual from '../../components/top/Visual'
import Layout from '../../components/common/Layout'
import Title from '../../components/common/Title'

const MyPage = () => {
  return (
    <>
      <div className='container-wrap'>
        <Visual visualText1="마이페이지" titleClass="fs36"/>
        <Layout>
          <div className='member-info'>
            <Title title="회원정보" />
            <table className='table-style2'>
              <caption>회원정보 테이블</caption>
              <colgroup>
							  <col style={{ width: '180px' }} />
                <col style={{ width: 'auto' }} />
							</colgroup>
              <tbody>
                <tr>
                  <th scope='row'>이름</th>
                  <td><input type='text' placeholder='김닥터' title='이름 입력' /></td>
                </tr>
                <tr>
                  <th scope='row'>아이디</th>
                  <td><input type='email' placeholder='doctorkim@gmail.com' title='아이디 입력' /><button className='form-btn'>중복확인</button></td>
                </tr>
                <tr>
                  <th scope='row'>비밀번호</th>
                  <td><button className='form-btn'>비밀번호 변경</button></td>
                </tr>
                <tr>
                  <th scope='row'>휴대폰번호</th>
                  <td><input type='text' placeholder='휴대폰 번호' title='휴대폰 번호 입력' /><button className='form-btn'>인증번호 전송</button></td>
                </tr>
                <tr>
                  <th scope='row'>인증번호 확인</th>
                  <td><input type='text' placeholder='인증번호 입력' title='인증번호 입력' /><button className='form-btn'>인증번호 확인</button></td>
                </tr>
                <tr>
                  <th scope='row'>근무처</th>
                  <td><input type='text' placeholder='닥터빌종합병원' title='근무처 입력' /></td>
                </tr>
                <tr>
                  <th scope='row'>근무형태</th>
                  <td><input type='text' placeholder='종합병원' title='근무형태 입력' /></td>
                </tr>
                <tr>
                  <th scope='row'>면허번호</th>
                  <td><input type='text' placeholder='면허번호' title='면허번호 입력' /></td>
                </tr>
                <tr>
                  <th scope='row'>진료과</th>
                  <td><input type='text' placeholder='순환기내과' title='진료과 입력' /></td>
                </tr>
                <tr>
                  <th scope='row'>이메일 수신</th>
                  <td><button className='form-btn on'>수신함</button><button className='form-btn lboder-0'>수신안함</button></td>
                </tr>
                <tr>
                  <th scope='row'>SMS 수신</th>
                  <td><button className='form-btn on'>수신함</button><button className='form-btn lboder-0'>수신안함</button></td>
                </tr>
              </tbody>
            </table>
            <div className='btn-wrap-row btm center'>
              <button className='btn-base bg-skyblue'>수정</button>
              <button className='btn-base line skyblue'>취소</button>
            </div>
          </div>
        </Layout>
      </div>
    </>
  )
}

export default MyPage