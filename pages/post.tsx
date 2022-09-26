import type { NextPage } from 'next'
import { useState } from 'react'
import Modal from '../components/common/Modal'
import DaumPostcode from "react-daum-postcode";

const Post: NextPage = () => {

    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const openPostCode = () => { setIsPopupOpen(true) }
    const closePostCode = () => { setIsPopupOpen(false) }

    return (
        <div>
            <button type='button' onClick={openPostCode}>검색</button>
            <div id='add-modal'>
                {isPopupOpen && (
                    <Modal>
                        <AddModal onClose={closePostCode}/>
                    </Modal>
                )}
            </div>
        </div>
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