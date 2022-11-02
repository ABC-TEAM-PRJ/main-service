import React, {useEffect, useState} from 'react'

/**
 * debounce
 * 연이은 이벤트 중 마지막만 (혹은 처음만) 인식
 * ex)resize, 검색 input 창 이벤트
 * */

/**
 * react hook
 * 함수 컴포넌트에서 React state와 생명주기 기능(lifecycle features)을 연동, 연결 (hook into) 해주는 함수
 * */

const debounce = () => {
    /**
     * useState
     * value1의 변수를 setValue1을 통해서 관리하겠다 (상태값 관리)
     * */
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const handleChange1 = (event:any) => setValue1(event.target.value)
    const handleChange2 = (event:any) => setValue2(event.target.value)

    /**
     * useEffect
     * 상태값 변화에 따라 변경이 이루어지는 것들을 처리해준다
     *
     * 컴포넌트가 mount 됐을 때(componentDidMount), 컴포넌트가 unmount 됐을 때(componentWillUnMount), 컴포넌트가 update(shouldComponentUpdate)
     * */

    useEffect(() => {
        console.log('마운트 될 때만 실행된다.');
    }, []);

    useEffect(() => {
        console.log('리렌더링 될 때 마다 실행된다.');
    });

    // useEffect(() => {
    //     console.log(value1);
    //     console.log('업데이트 될 때 실행된다.');
    // }, [value1]);

    /**특정값이 업데이트 되기 전에 cleanup이라는 함수를 실행하고 싶을 때 */
    useEffect(() => {
        console.log('effect');
        console.log(value1);
        return () => {
            console.log('cleanup');
            console.log(value1);
        };
    }, []);

    useEffect(()=>{
        console.log("일반입력",value1)
    },[value1]);

    useEffect(()=>{
        const debounce = setTimeout(()=>{
            console.log("디바운스입력",value2)
        },1000);

        /**
         * clearTimeout: setTimeout함수를 취소하는 역할
         * ex)
         *   - 일정 시간 뒤 로그아웃 처리할 때
         *   - 몇초뒤에 이벤트 팝업을 띄울 경우
         * */

        return () => clearTimeout(debounce)
    },[value2]);

    return (
        <>
            <div>일반입력: <input value={value1} onChange={handleChange1}/></div>
            <div>디바운스입력: <input value={value2} onChange={handleChange2}/></div>
        </>
    );
}

export default debounce()