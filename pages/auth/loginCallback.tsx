import type { NextPage } from 'next'
import React, { useState, useEffect } from "react";

export default function LoginCallback() {

    useEffect(() => {
        const naver = (window as any).naver;
        let naverLogin: any;
    
        const login = () => {
            naverLogin = new naver.LoginWithNaverId({
                clientId: 'ZZiOsnxYi2v4sIaqTlJu', // ClientID
                callbackUrl: 'http://localhost:3000/auth/loginCallback', // Callback URL
            })
    
    
            console.log(naverLogin.user)
            // naverLogin.getLoginStatus(function (status) {
            //     if (status) {
            //         const nickName=naverLogin.user.getNickName();
            //         const age=naverLogin.user.getAge();
            //         const birthday=naverLogin.user.getBirthday();
          
            //         console.log(naverLogin.user)
            //         if(nickName===null||nickName===undefined ){
            //           alert("별명이 필요합니다. 정보제공을 동의해주세요.");
            //           // naverLogin.reprompt();
            //           return ;  
            //       }else{
            //         // setLoginStatus();
            //       }
            //     }
            //   });
        }
        console.log(`221212`)
        login();
      });

    return (
        <div>
            test
        </div>
    )
}