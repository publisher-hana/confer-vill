import React from 'react'
import Layout from '../../components/common/Layout'
import BoxCont from './BoxCont'
import SelectItem from '../../components/common/SelectItem';
import Aside from '../../components/common/Aside';
import Visual from '../../components/top/Visual';
import Title from '../../components/common/Title';
import '../pages.scss'

export const options = [
  { value: "usa", label: "일시순" },
  { value: "canada", label: "종료순" },
];

const Home = () => {
  return (
    <>
    <div className='container-wrap'>
      <Visual visualText1="대한민국 의료 웨비나," visualText2="닥터빌 웨비나에서 편리하게 참여하세요!"/>
      <Layout>
        <div className='container-inner main'>
          <div className='container-left'>
            <div className='flex-scb'>
              <div className='cont-title-wrap'>
                <Title title="진행중인 웹 심포지엄"/><span>4</span>
              </div>
              <SelectItem 
                options={options}
                defaultValue={options[0]}
              />
            </div>
            <div className='box-cont-wrap'>
              <BoxCont 
                title="제 1회 Korea Microbiome Consortium (KMBC) 라이브 심포지엄 (한국표준과학연구원 주관)"
                date="2022년 7월 3일 (금) 09:00 ~ 17:00"
                rating="4"
                labels={['pay', 'closed', 'e-test']} 
              />
              <BoxCont 
                title="2022년 대한심부전학회 개원의 연수강좌 온라인 생중계 "
                date="2022년 7월 3일 (금) 09:00 ~ 17:00"
                rating="4"
                labels={['end']} 
              />
              <BoxCont 
                title="2022년 대한심부전학회 개원의 연수강좌 온라인 생중계 "
                date="2022년 7월 3일 (금) 09:00 ~ 17:00"
                rating="4"
                labels={['end']} 
              />
            </div>
          </div>
          <Aside />
        </div>
      </Layout>
    </div>
    </>
  )
}

export default Home