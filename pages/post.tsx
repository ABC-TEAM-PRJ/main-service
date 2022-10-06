import type { NextPage } from 'next'
import { useState } from 'react'
import Modal from '../components/common/Modal'
import DaumPostcode from "react-daum-postcode";
import Header from "../components/common/Header";

const Post: NextPage = () => {

    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const openPostCode = () => { setIsPopupOpen(true) }
    const closePostCode = () => { setIsPopupOpen(false) }

    return (
        <>
        <Header/>
        <div className="m-auto w-[829px]">
            <div className="mt-[62px] font-semibold text-[24px]">매물등록</div>

            <div className="mt-[29px]">매물종류<span className="text-[#FF0000]">*</span></div>
            <ul className="flex text-center list-none">
                <li className="text-[#FFF] w-[80px] h-[35px] bg-[#B5B5B5] rounded-l-[5px] p-[10px]">원룸</li>
                <li className="text-[#B5B5B5] w-[80px] h-[35px] p-[10px] border-solid border-1 border-[#B5B5B5]">투룸</li>
                <li className="w-[80px] h-[35px] p-[10px]">쓰리룸</li>
                <li className="w-[80px] h-[35px] rounded-r-[5px] p-[10px]">아파트</li>
            </ul>

            <div className="mt-[29px]">거래정보<span className="text-[#FF0000]">*</span></div>
            <ul className="flex text-center list-none">
                <li className="text-[#FFF] w-[80px] h-[35px] bg-[#B5B5B5] rounded-l-[5px] p-[10px]">월세</li>
                <li className="w-[80px] h-[35px] p-[10px]">전세</li>
                <li className="w-[80px] h-[35px] rounded-r-[5px] p-[10px]">매매</li>
            </ul>

            <div className="mt-[29px]">거래가격<span className="text-[#FF0000]">*</span><span className="text-[#FF0000] text-[7px]">숫자만 입력가능</span></div>
            <input className="mt-[9px] w-[277px] h-[35px] border-solid border-1 border-[#B5B5B5] rounded-[5px] focus:outline-none"/>

            <div className="mt-[29px]">건물정보</div>
            <input className="mt-[9px] w-[277px] h-[35px] border-solid border-1 border-[#B5B5B5] rounded-[5px] focus:outline-none"/>

            <div className="mt-[29px]">위치정보</div>
            <div className="flex mt-[9px] ">
                <input className="w-[277px] h-[35px] border-solid border-1 border-[#B5B5B5] rounded-l-[5px] focus:outline-none"/>
                <button className="w-[80px] h-[35px] bg-[#B5B5B5] rounded-r-[5px] border-transparent p-[10px] text-[#FFF]" type='button' onClick={openPostCode}>검색</button>
            </div>
            <div id='add-modal'>
                {isPopupOpen && (
                    <Modal>
                        <AddModal onClose={closePostCode}/>
                    </Modal>
                )}
            </div>
            <input className="mt-[9px] w-[641px] h-[35px] border-solid border-1 border-[#B5B5B5] rounded-[5px] focus:outline-none"/>

            <div className="mt-[29px]">상세설명</div>
            <textarea className="mt-[29px] w-[642px] h-[100px] border-solid border-1 border-[#B5B5B5] rounded-[5px] focus:outline-none"/>

            <div className="">사진등록<span>*</span></div>
            <div>등록하기<input type="file" className=""/></div>

            <button>저장</button>
        </div>
        </>
    )
}

export default Post

function AddModal (props:any) {
    // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
    const handlePostCode = (data:any) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(data)
        console.log(fullAddress)
        console.log(data.zonecode)
        props.onClose()
    }

    return(
        <div>
            <DaumPostcode onComplete={handlePostCode}/>
            <button type='button' onClick={() => {props.onClose()}}>닫기</button>
        </div>
    )
}