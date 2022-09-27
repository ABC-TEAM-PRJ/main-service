import type { NextPage } from 'next'
import Layout from '../components/Layout'
import React, { useState, useEffect } from "react";
export default function Login() {

  useEffect(() => {
    const naver = (window as any).naver;
    let naverLogin: any;

    const login = () => {
        naverLogin = new naver.LoginWithNaverId({
            clientId: 'ZZiOsnxYi2v4sIaqTlJu', // ClientID
            callbackUrl: 'http://localhost:3000', // Callback URL
            isPopup: true, // 팝업 형태로 인증 여부
            loginButton: { 
                color: 'green', // 색상
                type: 3, // 버튼 크기
                height: '40' // 버튼 높이
            }, // 로그인 버튼 설정
        })

        naverLogin.init();
    }
    login();
  });

  return (
    <>
    <div>
      <div className="flex flex-col text-center justify-self-center w-full items-center">
        <div className="mt-48 mb-10 text-xl font-bold">집중</div>
        <input type="text" value="아이디" className="border-none mt-1 mb-3 px-3 py-2 bg-gray-100 rounded-md sm:text-sm w-96 h-12 text-lg text-gray-400
      "/>
        <input type="text" value="비밀번호" className="border-none mt-1 mb-6 px-3 py-2 rounded-md sm:text-sm w-96 h-12 text-lg text-gray-400
        "/>

        <button className="rounded-full font-bold text-lg mb-2 align-middle border-none bg-main-color text-white text-slate-50 color w-96 h-12 justify-center items-stretch hover:bg-green-600">로그인</button>
        <button className="rounded-full font-bold text-lg mb-2 border-2 border-main-color bg-white border-main-color-500 w-96 h-12 text-main-color justify-center items-stretch">네이버로 로그인</button>
        <button className="rounded-full font-bold text-lg border-2 border-amber-400 text-amber-400 bg-white w-96 h-12 justify-center items-stretch">카카오로 로그인</button>
        <div id='naverIdLogin' className='w-10 h-10 bg-blue-600'></div>
      </div>
      </div>
    </>
  )
}

Login.getLayout = function getLayout(Page: NextPage) {
  return (
    <Layout>
      {Page}
    </Layout>
  )
}